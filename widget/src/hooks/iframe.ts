import {
  setApiKey,
  setCurrentPage,
  setFingerprint
} from '../store'

interface IframeControl {
  updateCoreValueOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIframeControl (): IframeControl {
  function updateCoreValueOnStore (): void {
    if (process.env.NODE_ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apiKey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('fingerprint') ?? ''

      setCurrentPage(page)
      setApiKey(apiKey)
      setFingerprint(fingerprint)
      return
    }
    setCurrentPage('https://playground-url.com')
    setApiKey('fcd5015c-10d3-4e9c-b395-ec7ed8850165')
    setFingerprint('21321321312312321321')
  }

  function notifyOpen (): void {
    window.parent.postMessage({
      isOpen: true,
      isWidget: true
    }, '*')
  }

  function notifyClose (): void {
    window.parent.postMessage({
      isOpen: false,
      isWidget: true
    }, '*')
  }

  return {
    updateCoreValueOnStore,
    notifyOpen,
    notifyClose
  }
}
