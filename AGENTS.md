# MODUS OPERANDI
- Your task is to help me build my AI Startup vectal.ai
- Avoid feature creep at all cost. Avoid over-engineering and overthinking.
- Always prioritize writing clean, simple, and modular code.
- do what the user asks for, exactly are precisely. nothing more, nothing less.
- Execute exactly what is requested, nothing more.
- Check that you've implemented every requirement fully & completely.
- Prioritize simplicity and minimalism in your solutions.
- Use simple & easy-to-understand language. Write in short sentences.
- keep our codebase simple: resist creating new files unless it really makes sense.


# TECH STACK
- Cursor as my IDE (it's a fork of VSCode)
- Python and FastAPI for backend
- Next.js for the main app, with Tailwind
- Google Auth for auth, integrated with Supabase
- Supabase for the database (details in supabase_setup.md)
- Backend is deployed on Render.com
- Frontend is deployed on Vercel
- our staging/testing environment is deployed exactly like the production environment
- the 'main' branch is production, the 'dev' branch is staging/testing environment
- Polar.sh for payments. free tier, and Pro tier - $30/mo, or $270/year
- my domain "vectal.ai" is hosted on Namecheap
- our primary domain is www.vectal.ai, and vectal.ai just redirects to it
- the web search in Vectal is powered by Perplexity API
- we use OpenRouter for all our LLM calls
- we use Lucide React for almost all icons

----

# CURRENT FILE STRUCTURE
.
├── .cursor
│   └── rules
│       ├── behave.md
│       ├── deep_research_plan.md
│       ├── design_principles.md
│       ├── protocol.md
│       └── supabase_setup.md
├── .cursorignore
├── .cursorrules
├── .env
├── .github
│   └── workflows
│       └── update_changelog.yml
├── .gitignore
├── .repo_ignore
├── AGENTS.md
├── backend
│   ├── agents
│   │   ├── agent.py
│   │   ├── changelog_agent.py
│   │   ├── common
│   │   │   ├── behave.md
│   │   │   ├── context_injection.md
│   │   │   ├── generate_recurrence_pattern.message.md
│   │   │   ├── generate_recurrence_pattern.system.md
│   │   │   ├── mode_agentic.md
│   │   │   ├── mode_chat.md
│   │   │   ├── recurrence_format.md
│   │   │   ├── recurrence_parsing.message.md
│   │   │   ├── recurrence_parsing.system.md
│   │   │   ├── vectal_info_additional.md
│   │   │   ├── vectal_info.md
│   │   │   └── web_search_tool.md
│   │   ├── idea_list_agent
│   │   │   ├── idea_list_agent.py
│   │   │   └── idea_list_agent.system.md
│   │   ├── note_list_agent
│   │   │   ├── note_list_agent.py
│   │   │   └── note_list_agent.system.md
│   │   ├── project_agent
│   │   │   ├── project_agent.py
│   │   │   └── project_agent.system.md
│   │   ├── reminder_agent
│   │   │   ├── reminder_agent_message.md
│   │   │   ├── reminder_agent.py
│   │   │   └── reminder_agent.system.md
│   │   ├── standard_chat_agent
│   │   │   ├── standard_chat_agent.agents.md
│   │   │   ├── standard_chat_agent.message.md
│   │   │   ├── standard_chat_agent.py
│   │   │   └── standard_chat_agent.system.md
│   │   ├── task_list_agent
│   │   │   ├── task_list_agent.py
│   │   │   └── task_list_agent.system.md
│   │   ├── task_modal_agent
│   │   │   ├── task_modal_agent.message.md
│   │   │   ├── task_modal_agent.py
│   │   │   └── task_modal_agent.system.md
│   │   ├── ultra_search_agent
│   │   │   ├── ultra_search_agent.py
│   │   │   └── ultra_search_agent.system.md
│   │   └── web_search_agent
│   │       └── web_search_agent.py
│   ├── api.py
│   ├── apis
│   │   ├── api_polar_customer.py
│   │   ├── api_polar_webhooks.py
│   │   ├── audio.py
│   │   ├── chat_deepseek.py
│   │   ├── chat_history_api.py
│   │   ├── chat_o3.py
│   │   ├── chat.py
│   │   ├── errors.py
│   │   ├── health.py
│   │   ├── items.py
│   │   ├── login.py
│   │   ├── notes.py
│   │   ├── perspective_api.py
│   │   ├── preferences.py
│   │   ├── projects.py
│   │   ├── search.py
│   │   ├── tasks.py
│   │   ├── user_data.py
│   │   └── webhooks.py
│   ├── database
│   │   ├── chat_operations.py
│   │   ├── database.py
│   │   ├── event_operations.py
│   │   ├── idea_operations.py
│   │   ├── job_execution_operations.py
│   │   ├── note_operations.py
│   │   ├── onboarding
│   │   │   ├── notes.json
│   │   │   ├── onboarding.py
│   │   │   └── tasks.json
│   │   ├── param_operations.py
│   │   ├── project_operations.py
│   │   ├── reminder_operations.py
│   │   ├── supabase_auth.py
│   │   ├── task_operations.py
│   │   └── user_operations.py
│   ├── jobs
│   │   ├── background_worker_agent.py
│   │   └── job.py
│   ├── perspectives
│   │   ├── ideas_perspective.py
│   │   ├── infinite_thinking_perspective.py
│   │   ├── note_list_perspective.py
│   │   ├── perspective.py
│   │   ├── projects_perspective.py
│   │   ├── standard_chat_perspective.py
│   │   └── task_list_perspective.py
│   ├── prompts
│   │   ├── background_agent_prompts.py
│   │   ├── deep_research_prompt.py
│   │   ├── deepseek_prompt.py
│   │   ├── gpt4.5_compression.md
│   │   ├── infinite_thinking_prompt.py
│   │   ├── note_chat_prompt.py
│   │   ├── o3_mini_prompt.py
│   │   ├── sorting_prompt.py
│   │   ├── task_chat_prompt.py
│   │   └── web_search_prompt.py
│   ├── pydantic_models.py
│   ├── requirements.txt
│   ├── services
│   │   ├── ai_service.py
│   │   ├── audio_service.py
│   │   ├── background_agent_service.py
│   │   ├── deep_research_service.py
│   │   ├── deepseek_service.py
│   │   ├── event_service.py
│   │   ├── idea_service.py
│   │   ├── infinite_thinking_service.py
│   │   ├── note_service.py
│   │   ├── o3_mini_service.py
│   │   ├── param_service.py
│   │   ├── project_service.py
│   │   ├── reminder_service.py
│   │   ├── search_service.py
│   │   ├── task_service.py
│   │   ├── test.py
│   │   ├── user_service.py
│   │   └── web_search_service.py
│   ├── testing
│   │   ├── algolia.py
│   │   ├── categorize_messages.py
│   │   ├── categorize_messages.system.md
│   │   ├── db_speed.py
│   │   ├── hash_test.py
│   │   ├── jan_tests.py
│   │   ├── openrouter.py
│   │   ├── test-audio.mp3
│   │   ├── test.py
│   │   └── update_polar_customers.py
│   ├── utils
│   │   ├── async_class.py
│   │   ├── chat_history.py
│   │   ├── context.py
│   │   ├── date.py
│   │   ├── dicts.py
│   │   ├── dirty_json.py
│   │   ├── dotenv.py
│   │   ├── errors.py
│   │   ├── files.py
│   │   ├── hash.py
│   │   ├── imports.py
│   │   ├── indexing.py
│   │   ├── llms.py
│   │   ├── log.py
│   │   ├── polar.py
│   │   ├── rate_limit.py
│   │   ├── recurrence.py
│   │   └── tokens.py
│   └── vectal.py
├── frontend
│   └── vectal.ai
│       ├── .env
│       ├── .env.local
│       ├── .eslintrc.json
│       ├── .gitignore
│       ├── android
│       │   ├── app
│       │   └── capacitor-cordova-android-plugins
│       ├── app
│       │   ├── api
│       │   ├── changelog
│       │   ├── error
│       │   ├── favicon.ico
│       │   ├── fonts
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   ├── login
│       │   ├── page.tsx
│       │   ├── perspectives.tsx
│       │   ├── pricing
│       │   ├── privacy
│       │   └── terms
│       ├── components
│       │   ├── changelog
│       │   ├── chat
│       │   ├── common
│       │   ├── CustomerPortal.tsx
│       │   ├── DatePickerDemo.tsx
│       │   ├── drag-n-drop
│       │   ├── HiringNotification.tsx
│       │   ├── inbox
│       │   ├── infinite-thinking
│       │   ├── item-creation
│       │   ├── MarkdownEditor.tsx
│       │   ├── ModalContainer.tsx
│       │   ├── NavigationButtons.tsx
│       │   ├── notes
│       │   ├── projects
│       │   ├── search
│       │   ├── settings
│       │   ├── ShortcutButtonAndModal.tsx
│       │   ├── ShortcutsModal.tsx
│       │   ├── tasks
│       │   ├── ui
│       │   └── ViewToggler.tsx
│       ├── components.json
│       ├── hooks
│       │   ├── use-audio-transcription.tsx
│       │   ├── use-auth.tsx
│       │   ├── use-chat-sessions.ts
│       │   ├── use-is-mounted.ts
│       │   ├── use-mobile.tsx
│       │   ├── use-sync-chat-sessions.ts
│       │   └── use-user-data.tsx
│       ├── ios
│       │   ├── App
│       │   └── capacitor-cordova-ios-plugins
│       ├── lib
│       │   ├── api.ts
│       │   ├── changelog_data.json
│       │   ├── changelog-data.ts
│       │   ├── constants.ts
│       │   ├── convertMessages.ts
│       │   ├── events.ts
│       │   ├── perspectives
│       │   ├── serialization.ts
│       │   ├── services
│       │   ├── types.ts
│       │   └── utils.ts
│       ├── middleware.ts
│       ├── next-env.d.ts
│       ├── next.config.mjs
│       ├── out
│       │   ├── _next
│       │   ├── 404
│       │   ├── 404.html
│       │   ├── error
│       │   ├── favicon.ico
│       │   ├── images
│       │   ├── index.html
│       │   ├── index.txt
│       │   ├── login
│       │   ├── pricing
│       │   ├── privacy
│       │   └── terms
│       ├── package-lock.json
│       ├── package.json
│       ├── postcss.config.mjs
│       ├── public
│       │   └── images
│       ├── README.md
│       ├── store
│       │   ├── index.ts
│       │   ├── middlewares
│       │   ├── reducers
│       │   ├── thunks
│       │   └── utils
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       ├── types
│       │   ├── global.d.ts
│       │   └── tiptap-markdown.d.ts
│       ├── utils
│       │   ├── encrypt.ts
│       │   ├── supabase
│       │   └── userStorage.ts
│       └── vercel.json
├── instructions
│   ├── .$vectal_layers.drawio.dtmp
│   ├── commands.md
│   ├── docs
│   │   ├── ant_prompt_caching.md
│   │   ├── anthropic_tool_use.md
│   │   ├── ds-reasoner.md
│   │   ├── openrouter providers.md
│   │   └── perplexity_api.md
│   ├── search_db_prep.sql
│   ├── vectal_layers.drawio
│   └── vectal-docs
│       ├── INFINITE_THINKING.md
│       ├── PERSPECTIVES.md
│       ├── TASKS.md
│       └── TECH_STACK.md
├── scripts
│   └── run_stripe_webhook.py
└── test_prompts
    └── multiple_actions.txt

----

# IMPORTANT
- Always prioritize writing clean, simple, and modular code.
- Use simple & easy-to-understand language. Write in short sentences.


# COMMENTS
- Write lots of comments in your code. explain exactly what you are doing in your comments.
- but be strategic, do not explain obvious syntax - instead explain your thought process at the time of writing the code!
- NEVER delete explanatory comments from the code you're editing (unless they are wrong/obsolete)
- focus on explaining the non-obvious stuff in the comments, the nuances / details
- DO NOT delete comments currently in our code. If the comment is obsolete, or wrong, then update it - but NEVER mindlessly remove comments without reason.


# UI DESIGN PRINCIPLES
- our app is "dark mode" by default (#1A1A1A primary, #121212 secondary)
- minimalist UI with clean, simple layouts and ample spacing
- consistent text hierarchy (white primary, gray-300/400/500 secondary)
- card-based layout with subtle borders (#333333, #2C2C2C)
- responsive design that adapts from mobile to desktop
- interactive elements have clear hover states and transitions
- extensive use of tooltips for additional context
- NEVER EVER use blue-tinted gray. only use normal/neutral gray.


# HEADER COMMENTS
- EVERY file HAS TO start with 3 comments!
- the first comment needs to be the exact location of the file, for example: location/location/file-name.tsx (or .py or .md etc)
- the 2nd and 3rd comment should be a clear description of what this file was created to do. what IS and ISN'T the purpose of this file.
- NEVER delete these "header comments" from the files you're editing.


# IMPORTANT
- BE VERY SUSPICIOUS OF EVERY COMPLICATION in our code. SIMPLE = GOOD, COMPLEX = BAD.
- Always prioritize writing clean, simple, and modular code.
- do not add unnecessary complications.
- Implement precisely what the user asks for, without additional features or complexity.
- Prioritize simplicity and minimalism in your solutions.
