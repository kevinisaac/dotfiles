var fn_addin = (function (m, $, dependencies) { var addin = addin || {}; addin.styles=addin.styles||{};addin.commands = addin.commands||{};addin.dependencies=dependencies||addin.dependencies||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.info={
	"widget": true,
	"stub": true,
	"placeholderType": "dashIcon",
	"id": "topics",
	"label": "Topics",
	"requiredFeature": "topics",
	"addin": "d13fc525-0d8d-4516-910b-063dc88cebd3",
	"region": "top-center",
	"order": "append",
	"openState": "showTopics",
	"toggleEvent": "globalEvent:key:P",
	"keepOpenSetting": "keepTopicsState",
	"flex-order": 3,
	"icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\"><path d=\"M16 6S12 2 0 2v24c12.125 0 16 4 16 4s3.875-4 16-4V2C20 2 16 6 16 6zM4 6c5.084.426 8.203 1.602 10 2.555v16.109c-1.797-.949-4.916-2.125-10-2.555V6zm24 16.109c-5.086.43-8.205 1.605-10 2.555V8.555C19.795 7.602 22.914 6.426 28 6v16.109z\"/></svg>",
	"dependencies": ["vue"]
}
; m.console.log(m.elapsed()+ ': '+addin.info.id+' started'); /* This file is intentionally empty - please don't remove */; return addin; }); if(m.addinManager) {m.addinManager.registerAddinFn("d13fc525-0d8d-4516-910b-063dc88cebd3", fn_addin);}