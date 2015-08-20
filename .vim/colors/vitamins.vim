" Maintainer:	Henrique C. Alves (hcarvalhoalves@gmail.com)
" Version:      1.1
" Last Change:	September 23 2008

set background=dark

hi clear

if exists("syntax_on")
  syntax reset
endif

let colors_name = "vitamins"

" Vim >= 7.0 specific colors
if version >= 700
  hi CursorLine guibg=#2d2d2d ctermbg=235 cterm=bold
  hi CursorColumn guibg=#2d2d2d ctermbg=236
  hi MatchParen guifg=#f6f3e8 guibg=#857b6f gui=bold ctermbg=59
  hi Pmenu 		guifg=#f6f3e8 guibg=#444444 ctermbg=242
  hi PmenuSel 	guifg=#000000 guibg=#cdd129 ctermfg=0 ctermbg=184
endif

" General colors
hi Cursor 		guifg=NONE    guibg=#656565 gui=none ctermbg=2
hi Normal 		guifg=#f6f3f0 guibg=#242424 gui=none ctermfg=254 ctermbg=233
hi NonText 		guifg=#808080 guibg=#303030 gui=none ctermfg=242 ctermbg=233
hi LineNr 		guifg=#5c5a4f guibg=#000000 gui=none ctermfg=239 ctermbg=233
hi StatusLine 	guifg=#f6f3e8 guibg=#444444 gui=italic ctermfg=239 ctermbg=233
hi StatusLineNC guifg=#857b6f guibg=#444444 gui=none
hi VertSplit 	guifg=#444444 guibg=#444444 gui=none 
hi Folded 		guibg=#2d2d2d guifg=#a0a8b0 gui=none ctermfg=none ctermbg=234
hi Title		guifg=#f6f3e8 guibg=NONE	gui=bold 
hi Visual		guifg=#ffffd7 guibg=#444444 gui=none ctermfg=186 ctermbg=238
hi SpecialKey	guifg=#808080 guibg=#343434 gui=none

" Syntax highlighting
hi Comment 		guifg=#808080 gui=italic ctermfg=186
hi Todo 		guifg=#8f8f8f gui=italic ctermfg=245
hi Constant 	guifg=#acf0f2 gui=none ctermfg=162
hi String 		guifg=#ff5d28 gui=italic ctermfg=154
hi Identifier 	guifg=#ff5d28 gui=none ctermfg=28
hi Function 	guifg=#cdd129 gui=none ctermfg=142
hi Type 		guifg=#cdd129 gui=none ctermfg=184
hi Statement 	guifg=#af5f5f gui=none ctermfg=131
hi Keyword		guifg=#cdd129 gui=none ctermfg=196
hi PreProc 		guifg=#ede39e gui=none ctermfg=187
hi Number		guifg=#ede39e gui=none ctermfg=36
hi Special		guifg=#acf0f2 gui=none ctermfg=159
