var fn_addin = (function (m, $, dependencies) { var addin = addin || {}; addin.styles=addin.styles||{};addin.commands = addin.commands||{};addin.dependencies=dependencies||addin.dependencies||{};addin.styles.style = function(){ return; }; addin.views = addin.views || {}; addin.collect = addin.collect || {}; addin.models = addin.models || {}; addin.templates = addin.templates || {}; addin.info={
	"widget": true,
	"stub": true,
	"placeholderType": "dashIcon",
	"id": "app_launcher",
	"label": "Apps",
	"requiredFeature": "app_launcher",
	"addin": "40203927-6651-4c0f-bc82-b25a8fe83505",
	"region": "top-center",
	"order": "append",
	"openState": "showApps",
	"toggleEvent": "globalEvent:key:A",
	"keepOpenSetting": "keepAppsState",
	"dependencies": ["vue"],
	"flex-order": 2,
	"icon": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 318 318\"><path d=\"M68 3H15C6.729 3 0 9.729 0 18v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15V18c0-8.271-6.729-15-15-15zM185 3h-53c-8.271 0-15 6.729-15 15v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15V18c0-8.271-6.729-15-15-15zM303 3h-53c-8.271 0-15 6.729-15 15v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15V18c0-8.271-6.729-15-15-15zM68 117H15c-8.271 0-15 6.729-15 15v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15v-53c0-8.271-6.729-15-15-15zM185 117h-53c-8.271 0-15 6.729-15 15v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15v-53c0-8.271-6.729-15-15-15zM303 117h-53c-8.271 0-15 6.729-15 15v53c0 8.271 6.729 15 15 15h53c8.271 0 15-6.729 15-15v-53c0-8.271-6.729-15-15-15zM68 232H15c-8.271 0-15 6.729-15 15v53c0 8.272 6.729 15 15 15h53c8.271 0 15-6.728 15-15v-53c0-8.271-6.729-15-15-15zM185 232h-53c-8.271 0-15 6.729-15 15v53c0 8.272 6.729 15 15 15h53c8.271 0 15-6.728 15-15v-53c0-8.271-6.729-15-15-15zM303 232h-53c-8.271 0-15 6.729-15 15v53c0 8.272 6.729 15 15 15h53c8.271 0 15-6.728 15-15v-53c0-8.271-6.729-15-15-15z\"/></svg>"
}
; m.console.log(m.elapsed()+ ': '+addin.info.id+' started'); /* This file is intentionally empty - please don't remove */; return addin; }); if(m.addinManager) {m.addinManager.registerAddinFn("40203927-6651-4c0f-bc82-b25a8fe83505", fn_addin);}