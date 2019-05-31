if(chrome && chrome.runtime)
{
    var $inputUrl = document.createElement('input')
    $inputUrl.type = 'hidden'
    $inputUrl.id = 'momentumLoginUrl'
    $inputUrl.value = chrome.runtime.getURL('/login.html')
    document.body.appendChild($inputUrl)

    var manifest = chrome.runtime.getManifest()
    if(manifest) {
        var $inputVersion = document.createElement('input')
        $inputVersion.type = 'hidden'
        $inputVersion.id = 'momentumVersion'
        $inputVersion.value = manifest.version
        document.body.appendChild($inputVersion)
    }
}
