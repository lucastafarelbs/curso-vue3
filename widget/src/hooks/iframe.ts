import {
  setApiKey,
  setCurrentPage,
  setFingerprint
} from '../store'

interface IFrameControl {
  updateCoreValueOnStore(): void;
  notifyOpen(): void;
  notifyClose(): void;
}

export default function useIframeControl(): IframeControl {
  function updateCoreValueOnStore(): void {
    if (process.env.NODE_) ENV === 'production') {
      const query = new URLSearchParams(window.location.search)
      const apiKey = query.get('api_key') ?? ''
      const page = query.get('page') ?? ''
      const fingerprint = query.get('fingerprint') ?? ''

      setApiKey(apiKey)
      setCurrentPage(page)
      setFingerprint(fingerprint)
      return
    }
  }

  function notifyOpen(): void { }

  function notifyClose(): void { }

  return {
    updateCoreValueOnStore,
    notifyOpen,
    notifyClose
  }
}
