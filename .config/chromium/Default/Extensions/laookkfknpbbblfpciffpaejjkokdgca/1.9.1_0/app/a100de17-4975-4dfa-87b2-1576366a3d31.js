var fn_addin=function(s,e,n){var t=t||{};t.styles=t.styles||{},t.commands=t.commands||{},t.dependencies=n||t.dependencies||{},t.styles.style=function(){},t.views=t.views||{},t.collect=t.collect||{},t.models=t.models||{},t.templates=t.templates||{},t.info={widget:!0,id:"team_links",dependencies:["links_common"],class:"app-container links",appClass:"links-app",region:"top-left",order:"prepend",after:".team-logo",placeholderType:"metric",addin:"a100de17-4975-4dfa-87b2-1576366a3d31",requiredFeature:"teamLinks",toggleEvent:"globalEvent:key:L",closeOnEsc:"true",visibleSetting:"linksVisible"},s.console.log(s.elapsed()+": "+t.info.id+" started");var l=t.dependencies.links_common;return t.views.teamlinks=s.widgetManager.handover("team_links",null,{region:"top-left",order:"prepend",bootstrap:function(n,i){l.info=t.info,s.conditionalFeatures.checkFeatureAndMigrateData("serverlinks","linksVisible","momentum-quicklinks",function(){!function(e){if(!s.models.customization.get("linksVisible"))return;s.collect.teamlinks=e,s.views.teamlinks=new l.views.QuickLinks({collection:s.collect.teamlinks,region:"top-left",order:"prepend",name:"Team",team:!0,id:"teamlinks",el:n,class:"teamlinks links"}),i(s.views.teamlinks),s.stopListening(s.models.customization,"change:linksVisible")}(new l.collect.QuickLinks({model:l.models.TeamLink,serverIdAttribute:"id",name:"teamlinks"}))},function(){},function(e){s.listenTo(s.models.customization,"change:linksVisible",e)})}}),t};m.addinManager&&m.addinManager.registerAddinFn("a100de17-4975-4dfa-87b2-1576366a3d31",fn_addin);