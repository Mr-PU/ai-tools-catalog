import { Tool } from '../types/tool'

export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI model',
    category: 'Language Models',
    url: 'https://chat.openai.com',
    pricing: 'Freemium',
    tags: ['LLM', 'Chat', 'OpenAI']
  },
  {
    id: '2',
    name: 'Midjourney',
    description: 'AI-powered image generation with artistic capabilities',
    url: 'https://www.midjourney.com',
    category: 'Image Generation',
    pricing: 'Paid',
    tags: ['art', 'images', 'generation']
  },
  {
    id: '3',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar and style checking',
    url: 'https://www.grammarly.com',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'grammar', 'editing']
  },
  {
    id: '4',
    name: 'DALL-E',
    description: 'AI system that creates realistic images from text descriptions',
    url: 'https://openai.com/dall-e-2',
    category: 'Image Generation',
    pricing: 'Paid',
    tags: ['images', 'generation', 'art']
  },
  {
    id: '5',
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, tasks, and knowledge management',
    url: 'https://www.notion.so/product/ai',
    category: 'Productivity',
    pricing: 'Paid',
    tags: ['productivity', 'notes', 'organization']
  },
  {
    id: '6',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write better code',
    url: 'https://github.com/features/copilot',
    category: 'Development',
    pricing: 'Paid',
    tags: ['coding', 'development', 'programming']
  },
  {
    id: '7',
    name: 'Runway',
    description: 'AI-powered video editing and generation platform',
    url: 'https://runwayml.com',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'editing', 'generation']
  },
  {
    id: '8',
    name: 'ElevenLabs',
    description: 'AI voice generation and text-to-speech platform',
    url: 'https://elevenlabs.io',
    category: 'Audio Generation',
    pricing: 'Freemium',
    tags: ['voice', 'audio', 'text-to-speech']
  },
  {
    id: '9',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant for conversation and task completion',
    url: 'https://claude.ai',
    category: 'Language Models',
    pricing: 'Freemium',
    tags: ['chat', 'assistant', 'conversation']
  },
  {
    id: '10',
    name: 'Stable Diffusion',
    description: 'Open-source text-to-image generation model',
    url: 'https://stability.ai',
    category: 'Image Generation',
    pricing: 'Free',
    tags: ['images', 'generation', 'art']
  },
  {
    id: '11',
    name: 'Copy.ai',
    description: 'AI-powered copywriting and content generation tool',
    url: 'https://www.copy.ai',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'content', 'marketing']
  },
  {
    id: '12',
    name: 'Descript',
    description: 'AI-powered video and audio editing platform',
    url: 'https://www.descript.com',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'audio', 'editing']
  },
  {
    id: '13',
    name: 'Jasper',
    description: 'AI content creation platform for marketing and business',
    url: 'https://www.jasper.ai',
    category: 'Writing',
    pricing: 'Paid',
    tags: ['writing', 'content', 'marketing']
  },
  {
    id: '14',
    name: 'Synthesia',
    description: 'AI video generation platform with virtual avatars',
    url: 'https://www.synthesia.io',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'avatars', 'generation']
  },
  {
    id: '15',
    name: 'Murf',
    description: 'AI voice generation platform for professional voiceovers',
    url: 'https://murf.ai',
    category: 'Audio Generation',
    pricing: 'Freemium',
    tags: ['voice', 'audio', 'voiceovers']
  },
  {
    id: '16',
    name: 'Bard',
    description: 'Google\'s conversational AI service',
    url: 'https://bard.google.com',
    category: 'Language Models',
    pricing: 'Free',
    tags: ['chat', 'assistant', 'conversation']
  },
  {
    id: '17',
    name: 'Leonardo AI',
    description: 'AI-powered image generation and editing platform',
    url: 'https://leonardo.ai',
    category: 'Image Generation',
    pricing: 'Freemium',
    tags: ['images', 'art', 'generation']
  },
  {
    id: '18',
    name: 'QuillBot',
    description: 'AI-powered paraphrasing and writing assistant',
    url: 'https://quillbot.com',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'paraphrasing', 'editing']
  },
  {
    id: '19',
    name: 'HeyGen',
    description: 'AI video generation platform with virtual presenters',
    url: 'https://www.heygen.com',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'presentation', 'generation']
  },
  {
    id: '20',
    name: 'Play.ht',
    description: 'AI voice generation and text-to-speech platform',
    url: 'https://play.ht',
    category: 'Audio Generation',
    pricing: 'Freemium',
    tags: ['voice', 'audio', 'text-to-speech']
  },
  {
    id: '21',
    name: 'Perplexity AI',
    description: 'AI-powered search and research assistant',
    url: 'https://www.perplexity.ai',
    category: 'Research',
    pricing: 'Freemium',
    tags: ['search', 'research', 'information']
  },
  {
    id: '22',
    name: 'Canva AI',
    description: 'AI-powered design and image generation tools',
    url: 'https://www.canva.com/ai-tools',
    category: 'Image Generation',
    pricing: 'Freemium',
    tags: ['design', 'images', 'creation']
  },
  {
    id: '23',
    name: 'Writesonic',
    description: 'AI content creation platform for marketing',
    url: 'https://writesonic.com',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'content', 'marketing']
  },
  {
    id: '24',
    name: 'Pictory',
    description: 'AI video creation platform from text',
    url: 'https://pictory.ai',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'creation', 'text-to-video']
  },
  {
    id: '25',
    name: 'Resemble AI',
    description: 'AI voice cloning and generation platform',
    url: 'https://www.resemble.ai',
    category: 'Audio Generation',
    pricing: 'Paid',
    tags: ['voice', 'cloning', 'generation']
  },
  {
    id: '26',
    name: 'Character AI',
    description: 'AI-powered character creation and interaction',
    url: 'https://character.ai',
    category: 'Language Models',
    pricing: 'Free',
    tags: ['characters', 'chat', 'interaction']
  },
  {
    id: '27',
    name: 'Adobe Firefly',
    description: 'AI-powered creative tools for image generation and editing',
    url: 'https://www.adobe.com/sensei/generative-ai/firefly.html',
    category: 'Image Generation',
    pricing: 'Paid',
    tags: ['images', 'editing', 'creation']
  },
  {
    id: '28',
    name: 'Rytr',
    description: 'AI writing assistant for content creation',
    url: 'https://rytr.me',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'content', 'creation']
  },
  {
    id: '29',
    name: 'InVideo',
    description: 'AI-powered video creation platform',
    url: 'https://invideo.io',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'creation', 'editing']
  },
  {
    id: '30',
    name: 'Voicemod',
    description: 'AI voice changer and soundboard',
    url: 'https://www.voicemod.net',
    category: 'Audio Generation',
    pricing: 'Freemium',
    tags: ['voice', 'modification', 'audio']
  },
  {
    id: '31',
    name: 'Anthropic Claude',
    description: 'Advanced AI assistant for complex tasks',
    url: 'https://www.anthropic.com',
    category: 'Language Models',
    pricing: 'Paid',
    tags: ['assistant', 'tasks', 'complex']
  },
  {
    id: '32',
    name: 'DreamStudio',
    description: 'Stable Diffusion-based image generation platform',
    url: 'https://dreamstudio.ai',
    category: 'Image Generation',
    pricing: 'Paid',
    tags: ['images', 'generation', 'art']
  },
  {
    id: '33',
    name: 'Wordtune',
    description: 'AI writing assistant for improving text',
    url: 'https://www.wordtune.com',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['writing', 'improvement', 'editing']
  },
  {
    id: '34',
    name: 'Lumen5',
    description: 'AI video creation platform for social media',
    url: 'https://lumen5.com',
    category: 'Video Generation',
    pricing: 'Freemium',
    tags: ['video', 'social media', 'creation']
  },
  {
    id: '35',
    name: 'Coqui',
    description: 'Open-source text-to-speech and voice cloning',
    url: 'https://coqui.ai',
    category: 'Audio Generation',
    pricing: 'Free',
    tags: ['voice', 'text-to-speech', 'cloning']
  },
  {
    id: '36',
    name: 'You.com',
    description: 'AI-powered search and research platform',
    url: 'https://you.com',
    category: 'Research',
    pricing: 'Free',
    tags: ['search', 'research', 'information']
  },
  {
    id: '37',
    name: 'Artbreeder',
    description: 'AI-powered image generation and mixing platform',
    url: 'https://www.artbreeder.com',
    category: 'Image Generation',
    pricing: 'Freemium',
    tags: ['images', 'art', 'mixing']
  },
  {
    id: '38',
    name: 'Anyword',
    description: 'AI copywriting platform for marketing',
    url: 'https://anyword.com',
    category: 'Writing',
    pricing: 'Paid',
    tags: ['writing', 'marketing', 'copywriting']
  },
  {
    id: '39',
    name: 'Synthesys',
    description: 'AI video and voice generation platform',
    url: 'https://synthesys.io',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['video', 'voice', 'generation']
  },
  {
    id: '40',
    name: 'Descript Overdub',
    description: 'AI voice cloning for video editing',
    url: 'https://www.descript.com/overdub',
    category: 'Audio Generation',
    pricing: 'Paid',
    tags: ['voice', 'cloning', 'editing']
  },
  {
    id: '41',
    name: 'Pi',
    description: 'Personal AI assistant for conversation',
    url: 'https://pi.ai',
    category: 'Language Models',
    pricing: 'Free',
    tags: ['assistant', 'chat', 'conversation']
  },
  {
    id: '42',
    name: 'NightCafe',
    description: 'AI art generation platform',
    url: 'https://nightcafe.studio',
    category: 'Image Generation',
    pricing: 'Freemium',
    tags: ['art', 'images', 'generation']
  },
  {
    id: '43',
    name: 'Simplified',
    description: 'AI content creation platform',
    url: 'https://simplified.com',
    category: 'Writing',
    pricing: 'Freemium',
    tags: ['content', 'writing', 'creation']
  },
  {
    id: '44',
    name: 'Veed.io',
    description: 'AI-powered video editing platform',
    url: 'https://www.veed.io',
    category: 'Video Generation',
    pricing: 'Freemium',
    tags: ['video', 'editing', 'creation']
  },
  {
    id: '45',
    name: 'WellSaid Labs',
    description: 'AI voice generation platform',
    url: 'https://wellsaidlabs.com',
    category: 'Audio Generation',
    pricing: 'Paid',
    tags: ['voice', 'generation', 'text-to-speech']
  },
  {
    id: '46',
    name: 'Elicit',
    description: 'AI research assistant',
    url: 'https://elicit.org',
    category: 'Research',
    pricing: 'Free',
    tags: ['research', 'information', 'analysis']
  },
  {
    id: '47',
    name: 'D-ID',
    description: 'AI-powered talking avatar creation',
    url: 'https://www.d-id.com',
    category: 'Video Generation',
    pricing: 'Paid',
    tags: ['avatars', 'video', 'generation']
  },
  {
    id: '48',
    name: 'Speechify',
    description: 'AI text-to-speech platform',
    url: 'https://speechify.com',
    category: 'Audio Generation',
    pricing: 'Freemium',
    tags: ['text-to-speech', 'audio', 'reading']
  },
  {
    id: '49',
    name: 'Lexica',
    description: 'AI image generation and search platform',
    url: 'https://lexica.art',
    category: 'Image Generation',
    pricing: 'Free',
    tags: ['images', 'search', 'generation']
  },
  {
    id: '50',
    name: 'Tome',
    description: 'AI-powered presentation creation',
    url: 'https://tome.app',
    category: 'Productivity',
    pricing: 'Freemium',
    tags: ['presentations', 'creation', 'productivity']
  },
  {
    id: '51',
    name: 'AutoGPT',
    description: 'Autonomous AI agent that can complete complex tasks',
    category: 'Language Models',
    url: 'https://github.com/Significant-Gravitas/Auto-GPT',
    pricing: 'Free',
    tags: ['autonomous', 'tasks', 'automation']
  },
  {
    id: '52',
    name: 'Bing Image Creator',
    description: 'Microsoft\'s AI image generation tool powered by DALL-E',
    category: 'Image Generation',
    url: 'https://www.bing.com/create',
    pricing: 'Free',
    tags: ['images', 'generation', 'art']
  },
  {
    id: '53',
    name: 'Hugging Face',
    description: 'Open-source AI model repository and deployment platform',
    category: 'Development',
    url: 'https://huggingface.co',
    pricing: 'Freemium',
    tags: ['models', 'development', 'open source']
  },
  {
    id: '54',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant integrated into Replit IDE',
    category: 'Development',
    url: 'https://replit.com/ghostwriter',
    pricing: 'Paid',
    tags: ['coding', 'development', 'IDE']
  },
  {
    id: '55',
    name: 'Adobe Podcast',
    description: 'AI-powered audio enhancement and editing tool',
    category: 'Audio Generation',
    url: 'https://podcast.adobe.com',
    pricing: 'Free',
    tags: ['audio', 'podcasting', 'editing']
  },
  {
    id: '56',
    name: 'Pika Labs',
    description: 'AI video generation and editing platform',
    category: 'Video Generation',
    url: 'https://pika.art',
    pricing: 'Freemium',
    tags: ['video', 'generation', 'editing']
  },
  {
    id: '57',
    name: 'Gamma',
    description: 'AI-powered presentation and document creation',
    category: 'Productivity',
    url: 'https://gamma.app',
    pricing: 'Freemium',
    tags: ['presentations', 'documents', 'creation']
  },
  {
    id: '58',
    name: 'Cursor',
    description: 'AI-first code editor with built-in AI assistant',
    category: 'Development',
    url: 'https://cursor.sh',
    pricing: 'Freemium',
    tags: ['coding', 'editor', 'assistant']
  },
  {
    id: '59',
    name: 'Anthropic Claude API',
    description: 'API access to Claude AI models',
    category: 'Language Models',
    url: 'https://www.anthropic.com/api',
    pricing: 'Paid',
    tags: ['api', 'models', 'development']
  },
  {
    id: '60',
    name: 'Ideogram',
    description: 'AI image generation with text rendering capabilities',
    category: 'Image Generation',
    url: 'https://ideogram.ai',
    pricing: 'Freemium',
    tags: ['images', 'text', 'generation']
  },
  {
    id: '61',
    name: 'Cursor AI',
    description: 'AI-powered code completion and assistance',
    category: 'Development',
    url: 'https://cursor.sh',
    pricing: 'Freemium',
    tags: ['coding', 'completion', 'assistance']
  },
  {
    id: '62',
    name: 'Adobe Express',
    description: 'AI-powered design and content creation tool',
    category: 'Image Generation',
    url: 'https://www.adobe.com/express',
    pricing: 'Freemium',
    tags: ['design', 'content', 'creation']
  },
  {
    id: '63',
    name: 'Meta AI',
    description: 'Meta\'s AI research and development platform',
    category: 'Language Models',
    url: 'https://ai.meta.com',
    pricing: 'Free',
    tags: ['research', 'models', 'development']
  },
  {
    id: '64',
    name: 'Anthropic Constitutional AI',
    description: 'AI models trained with constitutional principles',
    category: 'Language Models',
    url: 'https://www.anthropic.com/constitutional',
    pricing: 'Paid',
    tags: ['ethics', 'models', 'research']
  },
  {
    id: '65',
    name: 'Stability AI API',
    description: 'API access to Stable Diffusion models',
    category: 'Image Generation',
    url: 'https://stability.ai/api',
    pricing: 'Paid',
    tags: ['api', 'images', 'generation']
  },
  {
    id: '66',
    name: 'Cohere',
    description: 'Enterprise-grade language models and embeddings',
    category: 'Language Models',
    url: 'https://cohere.ai',
    pricing: 'Paid',
    tags: ['enterprise', 'models', 'embeddings']
  },
  {
    id: '67',
    name: 'AssemblyAI',
    description: 'AI-powered audio and speech recognition',
    category: 'Audio Generation',
    url: 'https://www.assemblyai.com',
    pricing: 'Paid',
    tags: ['audio', 'speech', 'recognition']
  },
  {
    id: '68',
    name: 'DeepL',
    description: 'AI-powered translation and writing assistance',
    category: 'Writing',
    url: 'https://www.deepl.com',
    pricing: 'Freemium',
    tags: ['translation', 'writing', 'language']
  },
  {
    id: '69',
    name: 'Anthropic Claude Instant',
    description: 'Faster, more efficient version of Claude',
    category: 'Language Models',
    url: 'https://www.anthropic.com/claude',
    pricing: 'Paid',
    tags: ['chat', 'assistant', 'efficient']
  },
  {
    id: '70',
    name: 'Stability AI Audio',
    description: 'AI-powered audio generation and editing',
    category: 'Audio Generation',
    url: 'https://stability.ai/audio',
    pricing: 'Paid',
    tags: ['audio', 'generation', 'editing']
  },
  {
    id: '71',
    name: 'Anthropic Claude 2',
    description: 'Advanced version of Claude with improved capabilities',
    category: 'Language Models',
    url: 'https://www.anthropic.com/claude-2',
    pricing: 'Paid',
    tags: ['advanced', 'models', 'capabilities']
  },
  {
    id: '72',
    name: 'Stability AI Video',
    description: 'AI-powered video generation and editing',
    category: 'Video Generation',
    url: 'https://stability.ai/video',
    pricing: 'Paid',
    tags: ['video', 'generation', 'editing']
  },
  {
    id: '73',
    name: 'Anthropic Claude API v2',
    description: 'Updated API access to Claude models',
    category: 'Language Models',
    url: 'https://www.anthropic.com/api/v2',
    pricing: 'Paid',
    tags: ['api', 'models', 'development']
  },
  {
    id: '74',
    name: 'Stability AI Research',
    description: 'Open-source AI research and models',
    category: 'Research',
    url: 'https://stability.ai/research',
    pricing: 'Free',
    tags: ['research', 'models', 'open source']
  },
  {
    id: '75',
    name: 'Anthropic Claude for Business',
    description: 'Enterprise version of Claude AI',
    category: 'Language Models',
    url: 'https://www.anthropic.com/business',
    pricing: 'Paid',
    tags: ['enterprise', 'business', 'models']
  },
  {
    id: '76',
    name: 'Stability AI Enterprise',
    description: 'Enterprise solutions for AI image generation',
    category: 'Image Generation',
    url: 'https://stability.ai/enterprise',
    pricing: 'Paid',
    tags: ['enterprise', 'images', 'solutions']
  },
  {
    id: '77',
    name: 'Anthropic Claude for Education',
    description: 'Educational version of Claude AI',
    category: 'Language Models',
    url: 'https://www.anthropic.com/education',
    pricing: 'Free',
    tags: ['education', 'learning', 'models']
  },
  {
    id: '78',
    name: 'Stability AI for Education',
    description: 'Educational tools for AI image generation',
    category: 'Image Generation',
    url: 'https://stability.ai/education',
    pricing: 'Free',
    tags: ['education', 'images', 'learning']
  },
  {
    id: '79',
    name: 'Anthropic Claude for Research',
    description: 'Research version of Claude AI',
    category: 'Research',
    url: 'https://www.anthropic.com/research',
    pricing: 'Free',
    tags: ['research', 'models', 'academic']
  },
  {
    id: '80',
    name: 'Stability AI for Research',
    description: 'Research tools for AI image generation',
    category: 'Research',
    url: 'https://stability.ai/research-tools',
    pricing: 'Free',
    tags: ['research', 'images', 'academic']
  },
  {
    id: '81',
    name: 'Anthropic Claude for Developers',
    description: 'Developer tools for Claude AI',
    category: 'Development',
    url: 'https://www.anthropic.com/developers',
    pricing: 'Free',
    tags: ['development', 'tools', 'api']
  },
  {
    id: '82',
    name: 'Stability AI for Developers',
    description: 'Developer tools for AI image generation',
    category: 'Development',
    url: 'https://stability.ai/developers',
    pricing: 'Free',
    tags: ['development', 'tools', 'api']
  },
  {
    id: '83',
    name: 'Anthropic Claude Documentation',
    description: 'Documentation and guides for Claude AI',
    category: 'Development',
    url: 'https://www.anthropic.com/docs',
    pricing: 'Free',
    tags: ['documentation', 'guides', 'resources']
  },
  {
    id: '84',
    name: 'Stability AI Documentation',
    description: 'Documentation and guides for AI image generation',
    category: 'Development',
    url: 'https://stability.ai/docs',
    pricing: 'Free',
    tags: ['documentation', 'guides', 'resources']
  },
  {
    id: '85',
    name: 'Anthropic Claude Community',
    description: 'Community resources for Claude AI',
    category: 'Community',
    url: 'https://www.anthropic.com/community',
    pricing: 'Free',
    tags: ['community', 'resources', 'support']
  },
  {
    id: '86',
    name: 'Stability AI Community',
    description: 'Community resources for AI image generation',
    category: 'Community',
    url: 'https://stability.ai/community',
    pricing: 'Free',
    tags: ['community', 'resources', 'support']
  },
  {
    id: '87',
    name: 'Anthropic Claude Blog',
    description: 'Blog and updates about Claude AI',
    category: 'News',
    url: 'https://www.anthropic.com/blog',
    pricing: 'Free',
    tags: ['blog', 'updates', 'news']
  },
  {
    id: '88',
    name: 'Stability AI Blog',
    description: 'Blog and updates about AI image generation',
    category: 'News',
    url: 'https://stability.ai/blog',
    pricing: 'Free',
    tags: ['blog', 'updates', 'news']
  },
  {
    id: '89',
    name: 'Anthropic Claude Events',
    description: 'Events and webinars about Claude AI',
    category: 'Events',
    url: 'https://www.anthropic.com/events',
    pricing: 'Free',
    tags: ['events', 'webinars', 'learning']
  },
  {
    id: '90',
    name: 'Stability AI Events',
    description: 'Events and webinars about AI image generation',
    category: 'Events',
    url: 'https://stability.ai/events',
    pricing: 'Free',
    tags: ['events', 'webinars', 'learning']
  },
  {
    id: '91',
    name: 'Anthropic Claude Careers',
    description: 'Career opportunities at Anthropic',
    category: 'Careers',
    url: 'https://www.anthropic.com/careers',
    pricing: 'Free',
    tags: ['careers', 'jobs', 'opportunities']
  },
  {
    id: '92',
    name: 'Stability AI Careers',
    description: 'Career opportunities at Stability AI',
    category: 'Careers',
    url: 'https://stability.ai/careers',
    pricing: 'Free',
    tags: ['careers', 'jobs', 'opportunities']
  },
  {
    id: '93',
    name: 'Anthropic Claude Press',
    description: 'Press releases and media coverage',
    category: 'News',
    url: 'https://www.anthropic.com/press',
    pricing: 'Free',
    tags: ['press', 'media', 'coverage']
  },
  {
    id: '94',
    name: 'Stability AI Press',
    description: 'Press releases and media coverage',
    category: 'News',
    url: 'https://stability.ai/press',
    pricing: 'Free',
    tags: ['press', 'media', 'coverage']
  },
  {
    id: '95',
    name: 'Anthropic Claude Contact',
    description: 'Contact information and support',
    category: 'Support',
    url: 'https://www.anthropic.com/contact',
    pricing: 'Free',
    tags: ['contact', 'support', 'help']
  },
  {
    id: '96',
    name: 'Stability AI Contact',
    description: 'Contact information and support',
    category: 'Support',
    url: 'https://stability.ai/contact',
    pricing: 'Free',
    tags: ['contact', 'support', 'help']
  },
  {
    id: '97',
    name: 'Anthropic Claude Privacy',
    description: 'Privacy policy and data handling',
    category: 'Legal',
    url: 'https://www.anthropic.com/privacy',
    pricing: 'Free',
    tags: ['privacy', 'policy', 'legal']
  },
  {
    id: '98',
    name: 'Stability AI Privacy',
    description: 'Privacy policy and data handling',
    category: 'Legal',
    url: 'https://stability.ai/privacy',
    pricing: 'Free',
    tags: ['privacy', 'policy', 'legal']
  },
  {
    id: '99',
    name: 'Anthropic Claude Terms',
    description: 'Terms of service and usage',
    category: 'Legal',
    url: 'https://www.anthropic.com/terms',
    pricing: 'Free',
    tags: ['terms', 'service', 'legal']
  },
  {
    id: '100',
    name: 'Stability AI Terms',
    description: 'Terms of service and usage',
    category: 'Legal',
    url: 'https://stability.ai/terms',
    pricing: 'Free',
    tags: ['terms', 'service', 'legal']
  },
  {
    id: '101',
    name: 'Claude 3',
    description: 'Anthropic\'s latest AI model with improved reasoning and coding capabilities',
    category: 'Language Models',
    url: 'https://www.anthropic.com/claude',
    pricing: 'Paid',
    tags: ['LLM', 'Chat', 'Coding']
  },
  {
    id: '102',
    name: 'Gemini Pro',
    description: 'Google\'s advanced multimodal AI model with image and text understanding',
    category: 'Language Models',
    url: 'https://gemini.google.com',
    pricing: 'Freemium',
    tags: ['LLM', 'Multimodal', 'Google']
  },
  {
    id: '103',
    name: 'Mistral 7B',
    description: 'Open source language model with strong performance and efficiency',
    category: 'Language Models',
    url: 'https://mistral.ai',
    pricing: 'Free',
    tags: ['Open Source', 'LLM', 'Local']
  },
  {
    id: '104',
    name: 'Stable Diffusion 3',
    description: 'Latest version of the popular image generation model with improved quality',
    category: 'Image Generation',
    url: 'https://stability.ai',
    pricing: 'Freemium',
    tags: ['Images', 'Art', 'Photography']
  },
  {
    id: '105',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation model with better prompt understanding',
    category: 'Image Generation',
    url: 'https://openai.com/dall-e-3',
    pricing: 'Paid',
    tags: ['Images', 'Art', 'Design']
  },
  {
    id: '106',
    name: 'Midjourney v6',
    description: 'Latest version with improved artistic capabilities and style control',
    category: 'Image Generation',
    url: 'https://www.midjourney.com',
    pricing: 'Paid',
    tags: ['Art', 'Design', 'Photography']
  },
  {
    id: '107',
    name: 'Runway Gen-2',
    description: 'Advanced video generation with improved motion and consistency',
    category: 'Video Generation',
    url: 'https://runwayml.com',
    pricing: 'Paid',
    tags: ['Video', 'Animation', 'Editing']
  },
  {
    id: '108',
    name: 'Pika Labs',
    description: 'AI video generation with text-to-video and image-to-video capabilities',
    category: 'Video Generation',
    url: 'https://pika.art',
    pricing: 'Freemium',
    tags: ['Video', 'Animation', 'Art']
  },
  {
    id: '109',
    name: 'Suno AI',
    description: 'AI music generation with text-to-music capabilities',
    category: 'Audio Generation',
    url: 'https://suno.ai',
    pricing: 'Freemium',
    tags: ['Music', 'Audio', 'Generation']
  },
  {
    id: '110',
    name: 'Udio',
    description: 'AI music creation platform with advanced composition tools',
    category: 'Audio Generation',
    url: 'https://udio.com',
    pricing: 'Freemium',
    tags: ['Music', 'Composition', 'Audio']
  },
  {
    id: '111',
    name: 'ElevenLabs Pro',
    description: 'Advanced voice cloning and text-to-speech with emotional control',
    category: 'Audio Generation',
    url: 'https://elevenlabs.io',
    pricing: 'Paid',
    tags: ['Voice', 'TTS', 'Audio']
  },
  {
    id: '112',
    name: 'Notion AI',
    description: 'AI-powered workspace with writing and organization features',
    category: 'Productivity',
    url: 'https://www.notion.so/product/ai',
    pricing: 'Paid',
    tags: ['Writing', 'Organization', 'Notes']
  },
  {
    id: '113',
    name: 'Coda AI',
    description: 'AI-powered document collaboration with smart templates',
    category: 'Productivity',
    url: 'https://coda.io/ai',
    pricing: 'Paid',
    tags: ['Documents', 'Collaboration', 'Templates']
  },
  {
    id: '114',
    name: 'Tome AI',
    description: 'AI presentation builder with automatic design and content generation',
    category: 'Productivity',
    url: 'https://tome.app',
    pricing: 'Freemium',
    tags: ['Presentations', 'Design', 'Content']
  },
  {
    id: '115',
    name: 'Perplexity Pro',
    description: 'Advanced AI search engine with source citations and real-time data',
    category: 'Research',
    url: 'https://www.perplexity.ai',
    pricing: 'Paid',
    tags: ['Search', 'Research', 'Citations']
  },
  {
    id: '116',
    name: 'Elicit',
    description: 'AI research assistant for scientific papers and literature review',
    category: 'Research',
    url: 'https://elicit.org',
    pricing: 'Freemium',
    tags: ['Research', 'Academic', 'Papers']
  },
  {
    id: '117',
    name: 'Consensus',
    description: 'AI-powered research platform for scientific consensus',
    category: 'Research',
    url: 'https://consensus.app',
    pricing: 'Freemium',
    tags: ['Research', 'Science', 'Consensus']
  },
  {
    id: '118',
    name: 'Cursor Pro',
    description: 'AI-powered code editor with advanced coding assistance',
    category: 'Coding',
    url: 'https://cursor.sh',
    pricing: 'Paid',
    tags: ['Code', 'Editor', 'IDE']
  },
  {
    id: '119',
    name: 'Codeium',
    description: 'AI coding assistant with advanced code generation and completion',
    category: 'Coding',
    url: 'https://codeium.com',
    pricing: 'Freemium',
    tags: ['Code', 'Completion', 'Generation']
  },
  {
    id: '120',
    name: 'Tabnine Pro',
    description: 'AI code completion with advanced language understanding',
    category: 'Coding',
    url: 'https://www.tabnine.com',
    pricing: 'Paid',
    tags: ['Code', 'Completion', 'IDE']
  },
  {
    id: '121',
    name: 'Synthesia Pro',
    description: 'Advanced AI video generation with realistic avatars',
    category: 'Video Generation',
    url: 'https://www.synthesia.io',
    pricing: 'Paid',
    tags: ['Video', 'Avatars', 'Generation']
  },
  {
    id: '122',
    name: 'HeyGen',
    description: 'AI video creation with customizable avatars and voices',
    category: 'Video Generation',
    url: 'https://www.heygen.com',
    pricing: 'Paid',
    tags: ['Video', 'Avatars', 'Voice']
  },
  {
    id: '123',
    name: 'Descript',
    description: 'AI-powered video and audio editing with transcription',
    category: 'Video Generation',
    url: 'https://www.descript.com',
    pricing: 'Paid',
    tags: ['Video', 'Audio', 'Editing']
  },
  {
    id: '124',
    name: 'Adobe Firefly',
    description: 'AI image generation and editing tools from Adobe',
    category: 'Image Generation',
    url: 'https://www.adobe.com/sensei/generative-ai/firefly.html',
    pricing: 'Paid',
    tags: ['Images', 'Design', 'Adobe']
  },
  {
    id: '125',
    name: 'Canva AI',
    description: 'AI-powered design tools within Canva platform',
    category: 'Image Generation',
    url: 'https://www.canva.com/ai-tools/',
    pricing: 'Freemium',
    tags: ['Design', 'Images', 'Templates']
  },
  {
    id: '126',
    name: 'Leonardo AI',
    description: 'AI image generation with advanced control and editing',
    category: 'Image Generation',
    url: 'https://leonardo.ai',
    pricing: 'Freemium',
    tags: ['Images', 'Art', 'Design']
  },
  {
    id: '127',
    name: 'Anthropic Claude API',
    description: 'API access to Claude AI models for developers',
    category: 'Language Models',
    url: 'https://www.anthropic.com/api',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Development']
  },
  {
    id: '128',
    name: 'Google Vertex AI',
    description: 'Google\'s AI platform with access to various models',
    category: 'Language Models',
    url: 'https://cloud.google.com/vertex-ai',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Google']
  },
  {
    id: '129',
    name: 'Anthropic Claude API',
    description: 'API access to Claude AI models for developers',
    category: 'Language Models',
    url: 'https://www.anthropic.com/api',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Development']
  },
  {
    id: '130',
    name: 'Cohere Command',
    description: 'Advanced language model API for developers',
    category: 'Language Models',
    url: 'https://cohere.ai',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Development']
  },
  {
    id: '131',
    name: 'AssemblyAI',
    description: 'AI-powered audio transcription and analysis',
    category: 'Audio Generation',
    url: 'https://www.assemblyai.com',
    pricing: 'Paid',
    tags: ['Audio', 'Transcription', 'Analysis']
  },
  {
    id: '132',
    name: 'Descript Overdub',
    description: 'AI voice cloning for audio editing',
    category: 'Audio Generation',
    url: 'https://www.descript.com/overdub',
    pricing: 'Paid',
    tags: ['Voice', 'Audio', 'Editing']
  },
  {
    id: '133',
    name: 'Murf AI',
    description: 'AI voice generation with multiple languages and accents',
    category: 'Audio Generation',
    url: 'https://murf.ai',
    pricing: 'Freemium',
    tags: ['Voice', 'TTS', 'Languages']
  },
  {
    id: '134',
    name: 'GrammarlyGO',
    description: 'AI writing assistant with advanced suggestions',
    category: 'Writing',
    url: 'https://www.grammarly.com/grammarlygo',
    pricing: 'Paid',
    tags: ['Writing', 'Editing', 'Grammar']
  },
  {
    id: '135',
    name: 'Jasper AI',
    description: 'AI writing assistant for marketing and content creation',
    category: 'Writing',
    url: 'https://www.jasper.ai',
    pricing: 'Paid',
    tags: ['Writing', 'Marketing', 'Content']
  },
  {
    id: '136',
    name: 'Copy.ai',
    description: 'AI copywriting tool for marketing and sales',
    category: 'Writing',
    url: 'https://www.copy.ai',
    pricing: 'Freemium',
    tags: ['Writing', 'Marketing', 'Copy']
  },
  {
    id: '137',
    name: 'Otter.ai',
    description: 'AI meeting assistant with transcription and notes',
    category: 'Productivity',
    url: 'https://otter.ai',
    pricing: 'Freemium',
    tags: ['Transcription', 'Meetings', 'Notes']
  },
  {
    id: '138',
    name: 'Fireflies.ai',
    description: 'AI meeting assistant with transcription and action items',
    category: 'Productivity',
    url: 'https://fireflies.ai',
    pricing: 'Freemium',
    tags: ['Meetings', 'Transcription', 'Productivity']
  },
  {
    id: '139',
    name: 'Superhuman',
    description: 'AI-powered email client with smart features',
    category: 'Productivity',
    url: 'https://superhuman.com',
    pricing: 'Paid',
    tags: ['Email', 'Productivity', 'AI']
  },
  {
    id: '140',
    name: 'Mem.ai',
    description: 'AI-powered knowledge management and note-taking',
    category: 'Productivity',
    url: 'https://mem.ai',
    pricing: 'Paid',
    tags: ['Notes', 'Knowledge', 'Organization']
  },
  {
    id: '141',
    name: 'Scite.ai',
    description: 'AI research assistant for scientific literature',
    category: 'Research',
    url: 'https://scite.ai',
    pricing: 'Paid',
    tags: ['Research', 'Academic', 'Citations']
  },
  {
    id: '142',
    name: 'Semantic Scholar',
    description: 'AI-powered academic search engine',
    category: 'Research',
    url: 'https://www.semanticscholar.org',
    pricing: 'Free',
    tags: ['Research', 'Academic', 'Search']
  },
  {
    id: '143',
    name: 'Connected Papers',
    description: 'AI tool for exploring academic paper connections',
    category: 'Research',
    url: 'https://www.connectedpapers.com',
    pricing: 'Freemium',
    tags: ['Research', 'Academic', 'Visualization']
  },
  {
    id: '144',
    name: 'GitHub Copilot X',
    description: 'Advanced AI pair programmer with chat interface',
    category: 'Coding',
    url: 'https://github.com/features/copilot-x',
    pricing: 'Paid',
    tags: ['Code', 'AI', 'GitHub']
  },
  {
    id: '145',
    name: 'Amazon CodeWhisperer',
    description: 'AI coding companion from Amazon',
    category: 'Coding',
    url: 'https://aws.amazon.com/codewhisperer/',
    pricing: 'Freemium',
    tags: ['Code', 'AWS', 'AI']
  },
  {
    id: '146',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant in the browser',
    category: 'Coding',
    url: 'https://replit.com/ghostwriter',
    pricing: 'Paid',
    tags: ['Code', 'Browser', 'AI']
  },
  {
    id: '147',
    name: 'Synthesia Studio',
    description: 'AI video creation platform with avatars',
    category: 'Video Generation',
    url: 'https://www.synthesia.io/studio',
    pricing: 'Paid',
    tags: ['Video', 'Avatars', 'Creation']
  },
  {
    id: '148',
    name: 'D-ID',
    description: 'AI video generation with talking avatars',
    category: 'Video Generation',
    url: 'https://www.d-id.com',
    pricing: 'Paid',
    tags: ['Video', 'Avatars', 'Animation']
  },
  {
    id: '149',
    name: 'HeyGen Studio',
    description: 'AI video creation with customizable avatars',
    category: 'Video Generation',
    url: 'https://www.heygen.com/studio',
    pricing: 'Paid',
    tags: ['Video', 'Avatars', 'Creation']
  },
  {
    id: '150',
    name: 'Adobe Photoshop AI',
    description: 'AI-powered image editing in Photoshop',
    category: 'Image Generation',
    url: 'https://www.adobe.com/products/photoshop/ai.html',
    pricing: 'Paid',
    tags: ['Images', 'Editing', 'Adobe']
  },
  {
    id: '151',
    name: 'Midjourney Alpha',
    description: 'Early access to new Midjourney features',
    category: 'Image Generation',
    url: 'https://www.midjourney.com/alpha',
    pricing: 'Paid',
    tags: ['Images', 'Art', 'Early Access']
  },
  {
    id: '152',
    name: 'Stability AI API',
    description: 'API access to Stable Diffusion models',
    category: 'Image Generation',
    url: 'https://platform.stability.ai',
    pricing: 'Paid',
    tags: ['API', 'Images', 'Generation']
  },
  {
    id: '153',
    name: 'Anthropic Claude Instant',
    description: 'Faster, more efficient version of Claude',
    category: 'Language Models',
    url: 'https://www.anthropic.com/claude-instant',
    pricing: 'Paid',
    tags: ['LLM', 'Fast', 'Efficient']
  },
  {
    id: '154',
    name: 'Google PaLM 2',
    description: 'Google\'s latest language model',
    category: 'Language Models',
    url: 'https://ai.google/discover/palm2',
    pricing: 'Paid',
    tags: ['LLM', 'Google', 'Advanced']
  },
  {
    id: '155',
    name: 'Meta Llama 2',
    description: 'Open source language model from Meta',
    category: 'Language Models',
    url: 'https://ai.meta.com/llama',
    pricing: 'Free',
    tags: ['Open Source', 'LLM', 'Meta']
  },
  {
    id: '156',
    name: 'Soundraw',
    description: 'AI music generation with customizable styles',
    category: 'Audio Generation',
    url: 'https://soundraw.io',
    pricing: 'Freemium',
    tags: ['Music', 'Generation', 'Customization']
  },
  {
    id: '157',
    name: 'Boomy',
    description: 'AI music creation platform',
    category: 'Audio Generation',
    url: 'https://boomy.com',
    pricing: 'Freemium',
    tags: ['Music', 'Creation', 'AI']
  },
  {
    id: '158',
    name: 'AIVA',
    description: 'AI music composition for various genres',
    category: 'Audio Generation',
    url: 'https://www.aiva.ai',
    pricing: 'Freemium',
    tags: ['Music', 'Composition', 'Genres']
  },
  {
    id: '159',
    name: 'Writesonic',
    description: 'AI writing assistant for marketing content',
    category: 'Writing',
    url: 'https://writesonic.com',
    pricing: 'Freemium',
    tags: ['Writing', 'Marketing', 'Content']
  },
  {
    id: '160',
    name: 'Rytr',
    description: 'AI writing assistant for various content types',
    category: 'Writing',
    url: 'https://rytr.me',
    pricing: 'Freemium',
    tags: ['Writing', 'Content', 'Marketing']
  },
  {
    id: '161',
    name: 'Anyword',
    description: 'AI copywriting platform for marketing',
    category: 'Writing',
    url: 'https://anyword.com',
    pricing: 'Paid',
    tags: ['Writing', 'Marketing', 'Copy']
  },
  {
    id: '162',
    name: 'Motion',
    description: 'AI-powered calendar and task management',
    category: 'Productivity',
    url: 'https://www.usemotion.com',
    pricing: 'Paid',
    tags: ['Calendar', 'Tasks', 'Scheduling']
  },
  {
    id: '163',
    name: 'Reclaim AI',
    description: 'AI calendar assistant for scheduling',
    category: 'Productivity',
    url: 'https://reclaim.ai',
    pricing: 'Freemium',
    tags: ['Calendar', 'Scheduling', 'AI']
  },
  {
    id: '164',
    name: 'Clockwise',
    description: 'AI calendar optimization for teams',
    category: 'Productivity',
    url: 'https://www.getclockwise.com',
    pricing: 'Paid',
    tags: ['Calendar', 'Teams', 'Optimization']
  },
  {
    id: '165',
    name: 'Elicit Pro',
    description: 'Advanced AI research assistant',
    category: 'Research',
    url: 'https://elicit.org/pro',
    pricing: 'Paid',
    tags: ['Research', 'Academic', 'Advanced']
  },
  {
    id: '166',
    name: 'Scite Assistant',
    description: 'AI research assistant with citation analysis',
    category: 'Research',
    url: 'https://scite.ai/assistant',
    pricing: 'Paid',
    tags: ['Research', 'Citations', 'Analysis']
  },
  {
    id: '167',
    name: 'Research Rabbit',
    description: 'AI tool for academic research discovery',
    category: 'Research',
    url: 'https://www.researchrabbit.ai',
    pricing: 'Freemium',
    tags: ['Research', 'Academic', 'Discovery']
  },
  {
    id: '168',
    name: 'Amazon CodeGuru',
    description: 'AI code review and recommendations',
    category: 'Coding',
    url: 'https://aws.amazon.com/codeguru/',
    pricing: 'Paid',
    tags: ['Code', 'Review', 'AWS']
  },
  {
    id: '169',
    name: 'Tabnine Enterprise',
    description: 'Enterprise-grade AI code completion',
    category: 'Coding',
    url: 'https://www.tabnine.com/enterprise',
    pricing: 'Paid',
    tags: ['Code', 'Enterprise', 'Completion']
  },
  {
    id: '170',
    name: 'Sourcegraph Cody',
    description: 'AI coding assistant with codebase awareness',
    category: 'Coding',
    url: 'https://about.sourcegraph.com/cody',
    pricing: 'Freemium',
    tags: ['Code', 'Assistant', 'Search']
  },
  {
    id: '171',
    name: 'Runway Gen-3',
    description: 'Next-gen AI video generation platform',
    category: 'Video Generation',
    url: 'https://runwayml.com/gen-3',
    pricing: 'Paid',
    tags: ['Video', 'Generation', 'Advanced']
  },
  {
    id: '172',
    name: 'Synthesia Enterprise',
    description: 'Enterprise-grade AI video creation',
    category: 'Video Generation',
    url: 'https://www.synthesia.io/enterprise',
    pricing: 'Paid',
    tags: ['Video', 'Enterprise', 'Creation']
  },
  {
    id: '173',
    name: 'D-ID Enterprise',
    description: 'Enterprise AI video solutions',
    category: 'Video Generation',
    url: 'https://www.d-id.com/enterprise',
    pricing: 'Paid',
    tags: ['Video', 'Enterprise', 'AI']
  },
  {
    id: '174',
    name: 'Adobe Express AI',
    description: 'AI-powered design and content creation',
    category: 'Image Generation',
    url: 'https://www.adobe.com/express/feature/ai',
    pricing: 'Freemium',
    tags: ['Design', 'Content', 'Adobe']
  },
  {
    id: '175',
    name: 'Canva Magic Studio',
    description: 'Advanced AI design tools in Canva',
    category: 'Image Generation',
    url: 'https://www.canva.com/magic-studio/',
    pricing: 'Paid',
    tags: ['Design', 'AI', 'Canva']
  },
  {
    id: '176',
    name: 'Leonardo Enterprise',
    description: 'Enterprise AI image generation',
    category: 'Image Generation',
    url: 'https://leonardo.ai/enterprise',
    pricing: 'Paid',
    tags: ['Images', 'Enterprise', 'Generation']
  },
  {
    id: '177',
    name: 'Anthropic Claude API Pro',
    description: 'Advanced API access to Claude models',
    category: 'Language Models',
    url: 'https://www.anthropic.com/api/pro',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Advanced']
  },
  {
    id: '178',
    name: 'Google Vertex AI Pro',
    description: 'Advanced AI platform from Google',
    category: 'Language Models',
    url: 'https://cloud.google.com/vertex-ai/pro',
    pricing: 'Paid',
    tags: ['API', 'Google', 'Advanced']
  },
  {
    id: '179',
    name: 'Cohere Command Pro',
    description: 'Advanced language model API',
    category: 'Language Models',
    url: 'https://cohere.com/pro',
    pricing: 'Paid',
    tags: ['API', 'LLM', 'Advanced']
  },
  {
    id: '180',
    name: 'AssemblyAI Pro',
    description: 'Advanced audio transcription and analysis',
    category: 'Audio Generation',
    url: 'https://www.assemblyai.com/pro',
    pricing: 'Paid',
    tags: ['Audio', 'Transcription', 'Advanced']
  },
  {
    id: '181',
    name: 'Descript Pro',
    description: 'Advanced audio and video editing',
    category: 'Audio Generation',
    url: 'https://www.descript.com/pro',
    pricing: 'Paid',
    tags: ['Audio', 'Video', 'Advanced']
  },
  {
    id: '182',
    name: 'Murf Enterprise',
    description: 'Enterprise-grade voice generation',
    category: 'Audio Generation',
    url: 'https://murf.ai/enterprise',
    pricing: 'Paid',
    tags: ['Voice', 'Enterprise', 'Generation']
  },
  {
    id: '183',
    name: 'Grammarly Business',
    description: 'Enterprise writing assistance',
    category: 'Writing',
    url: 'https://www.grammarly.com/business',
    pricing: 'Paid',
    tags: ['Writing', 'Enterprise', 'Grammar']
  },
  {
    id: '184',
    name: 'Jasper Enterprise',
    description: 'Enterprise content creation platform',
    category: 'Writing',
    url: 'https://www.jasper.ai/enterprise',
    pricing: 'Paid',
    tags: ['Writing', 'Enterprise', 'Content']
  },
  {
    id: '185',
    name: 'Copy.ai Enterprise',
    description: 'Enterprise copywriting platform',
    category: 'Writing',
    url: 'https://www.copy.ai/enterprise',
    pricing: 'Paid',
    tags: ['Writing', 'Enterprise', 'Copy']
  },
  {
    id: '186',
    name: 'Otter Business',
    description: 'Enterprise meeting assistant',
    category: 'Productivity',
    url: 'https://otter.ai/business',
    pricing: 'Paid',
    tags: ['Meetings', 'Enterprise', 'Transcription']
  },
  {
    id: '187',
    name: 'Fireflies Enterprise',
    description: 'Enterprise meeting management',
    category: 'Productivity',
    url: 'https://fireflies.ai/enterprise',
    pricing: 'Paid',
    tags: ['Meetings', 'Enterprise', 'Management']
  },
  {
    id: '188',
    name: 'Superhuman Teams',
    description: 'Team email collaboration',
    category: 'Productivity',
    url: 'https://superhuman.com/teams',
    pricing: 'Paid',
    tags: ['Email', 'Teams', 'Collaboration']
  },
  {
    id: '189',
    name: 'Mem Enterprise',
    description: 'Enterprise knowledge management',
    category: 'Productivity',
    url: 'https://mem.ai/enterprise',
    pricing: 'Paid',
    tags: ['Knowledge', 'Enterprise', 'Management']
  },
  {
    id: '190',
    name: 'Scite Enterprise',
    description: 'Enterprise research platform',
    category: 'Research',
    url: 'https://scite.ai/enterprise',
    pricing: 'Paid',
    tags: ['Research', 'Enterprise', 'Platform']
  },
  {
    id: '191',
    name: 'Semantic Scholar API',
    description: 'API access to academic research',
    category: 'Research',
    url: 'https://www.semanticscholar.org/api',
    pricing: 'Paid',
    tags: ['Research', 'API', 'Academic']
  },
  {
    id: '192',
    name: 'Connected Papers Pro',
    description: 'Advanced research paper exploration',
    category: 'Research',
    url: 'https://www.connectedpapers.com/pro',
    pricing: 'Paid',
    tags: ['Research', 'Advanced', 'Exploration']
  },
  {
    id: '193',
    name: 'GitHub Copilot Business',
    description: 'Enterprise AI pair programming',
    category: 'Coding',
    url: 'https://github.com/features/copilot/business',
    pricing: 'Paid',
    tags: ['Code', 'Enterprise', 'AI']
  },
  {
    id: '194',
    name: 'Amazon CodeWhisperer Pro',
    description: 'Advanced AI coding companion',
    category: 'Coding',
    url: 'https://aws.amazon.com/codewhisperer/pro',
    pricing: 'Paid',
    tags: ['Code', 'AWS', 'Advanced']
  },
  {
    id: '195',
    name: 'Replit Teams',
    description: 'Team coding environment with AI',
    category: 'Coding',
    url: 'https://replit.com/teams',
    pricing: 'Paid',
    tags: ['Code', 'Teams', 'AI']
  },
  {
    id: '196',
    name: 'Runway Teams',
    description: 'Team video creation platform',
    category: 'Video Generation',
    url: 'https://runwayml.com/teams',
    pricing: 'Paid',
    tags: ['Video', 'Teams', 'Creation']
  },
  {
    id: '197',
    name: 'Synthesia Teams',
    description: 'Team video creation with AI',
    category: 'Video Generation',
    url: 'https://www.synthesia.io/teams',
    pricing: 'Paid',
    tags: ['Video', 'Teams', 'AI']
  },
  {
    id: '198',
    name: 'HeyGen Teams',
    description: 'Team video creation platform',
    category: 'Video Generation',
    url: 'https://www.heygen.com/teams',
    pricing: 'Paid',
    tags: ['Video', 'Teams', 'Creation']
  },
  {
    id: '199',
    name: 'Adobe Creative Cloud AI',
    description: 'AI tools across Adobe Creative Suite',
    category: 'Image Generation',
    url: 'https://www.adobe.com/creativecloud/ai.html',
    pricing: 'Paid',
    tags: ['Design', 'Adobe', 'Suite']
  },
  {
    id: '200',
    name: 'Canva Teams',
    description: 'Team design platform with AI',
    category: 'Image Generation',
    url: 'https://www.canva.com/teams/',
    pricing: 'Paid',
    tags: ['Design', 'Teams', 'AI']
  }
] 