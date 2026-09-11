
'use client'
import React, { RefObject, useMemo } from 'react'
// import { clearIframeCache } from '@/lib/serviceWorker'
import { cn } from '@/lib/utils/cn'


interface IframeRendererProps {
    src: string ,
    title: string,
    ariaLabel?: string
    id: string
    iframeRef ?: RefObject<HTMLIFrameElement | null>
    isCached: boolean
    className?: string
}


const IframeRenderer: React.FC<IframeRendererProps> = ({ src, title, ariaLabel, id, iframeRef, isCached, className }) => {
    const handleLoad = () => {
        
    }

    const urlWithCacheBusting = useMemo(() => {
        try {
            const url = new URL(src, window.location.origin)
            url.searchParams.set('_', Date.now().toString())
            return url.toString()
        } catch {
            return src
        }
    }, [src])

    return (
        <div
        className=" flex min-w-0 scroll-mt-24 flex-col-reverse items-stretch gap-4 overflow-hidden md:flex-col" >
        <div className="relative w-full gap-4 "> 
          <iframe
            key={`${id}-iframe`}
            loading='lazy'
            height={600}
            // ref={iframeRef}
            title={title}
            aria-label={ariaLabel || `${title}-preview`}
            className={cn('relative z-20 no-scrollbar w-full ', className)}
            src={urlWithCacheBusting}
            id={id}
            onLoad={handleLoad}
            sandbox="allow-scripts allow-same-origin"
        />
      </div>
      </div>
        
    )
}

export default IframeRenderer
