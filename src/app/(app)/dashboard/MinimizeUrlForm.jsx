'use client'

import axios from '@/lib/axios'
import { useState } from 'react'
import { ClipboardIcon } from '@heroicons/react/24/outline'
import {
    Button,
    Input,
    Popover,
    PopoverButton,
    PopoverPanel,
} from '@headlessui/react'

const MinimizeUrlForm = () => {
    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState(null)

    const handleSubmit = event => {
        event.preventDefault()
        axios
            .post('/api/minimize', {
                long_url: url,
            })
            .then(response => {
                const responseData = response.data
                setShortUrl(responseData.data.short_url)
            })
            .catch(() => {
                throw new Error('URLの短縮に失敗しました。')
            })
    }

    const copyToClipboard = async text => {
        await navigator.clipboard.writeText(text)
    }

    const onClickCopyButton = () => {
        copyToClipboard(shortUrl)
    }

    const onChangeUrl = e => {
        setUrl(e.target.value)
        setShortUrl(null)
    }

    return (
        <div className="flex flex-col items-center">
            <form onSubmit={handleSubmit} className="flex w-full">
                <Input
                    type="text"
                    className="basis-4/5 grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500"
                    value={url}
                    onChange={onChangeUrl}
                    placeholder="https://example.com"
                />
                <Button
                    type="submit"
                    className="basis-1/5 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                    短縮
                </Button>
            </form>
            {shortUrl && (
                <div className="flex items-center gap-2 mt-3">
                    <a
                        href={shortUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 hover:underline">
                        {shortUrl}
                    </a>
                    <Popover className="relative">
                        <PopoverButton
                            onClick={onClickCopyButton}
                            className="p-1 border-2 border-transparent focus:outline-none focus:border-gray-300 rounded">
                            <ClipboardIcon className="h-5 w-5" />
                        </PopoverButton>
                        <PopoverPanel
                            anchor="bottom"
                            className="bg-black text-white text-sm p-2 rounded">
                            Copied!
                        </PopoverPanel>
                    </Popover>
                </div>
            )}
        </div>
    )
}

export default MinimizeUrlForm
