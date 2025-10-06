import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Button } from './button'
import { AnimatedGroup } from './animated-group'
import { cn } from '../../lib/utils'
import ServicesDropdown from '../ServicesDropdown'
import LogoIcon from '../LogoIcon'
import { ActiveTabIndicator } from './active-tab-indicator'
import { trackEvent } from '../../lib/utmTracker'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(8px)',
            y: 8,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.2,
                duration: 0.6,
            },
        },
    },
}

export function HeroSection({ 
    title = "Soluções Metálicas e Industriais",
    subtitle = "Com qualidade, segurança e entrega no prazo",
    description = "Nossa equipe é altamente especializada em soldagem MIG, TIG e eletrodo revestido, além da execução de projetos como estruturas metálicas, tanques de combustível, escadas e tubulações industriais. Utilizamos equipamentos de última geração e materiais de alto padrão, assegurando obras resistentes, seguras e duradouras.",
    badge = "Resposta em até 24h",
    primaryButton = "Peça seu Orçamento",
    secondaryButton = "Nossos Serviços",
    primaryButtonLink = "/contact",
    secondaryButtonLink = "/services",
    backgroundImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    showCustomers = false
}) {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36 pb-32 md:pb-48">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src={backgroundImage}
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,#ffffff_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    {badge && (
                                        <Link
                                            to={primaryButtonLink}
                                            className="hover:bg-servitec-orange/10 bg-servitec-orange/10 group mx-auto flex w-fit items-center gap-4 rounded-full border border-servitec-orange/20 p-1 pl-4 shadow-md shadow-gray-200 transition-all duration-300">
                                            <span className="text-servitec-orange text-sm font-medium">{badge}</span>
                                            <span className="block h-4 w-0.5 border-l bg-servitec-orange/20"></span>

                                            <div className="bg-servitec-orange group-hover:bg-servitec-orange/80 size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3 text-white" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3 text-white" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    )}
                        
                                    {(title || subtitle) && (
                                            <h1
                                                className="mt-8 max-w-4xl mx-auto text-balance text-3xl md:text-4xl lg:text-5xl lg:mt-16 text-gray-900 font-heading font-bold leading-tight text-center">
                                                {title && <span className="block mb-3">{title}</span>}
                                                {subtitle && (
                                                    <span className="bg-gradient-to-r from-servitec-orange via-orange-400 to-servitec-orange bg-clip-text text-transparent block text-2xl md:text-3xl lg:text-4xl">
                                                        {subtitle}
                                                    </span>
                                                )}
                                            </h1>
                                        )}
                                        {description && (
                                            <p
                                                className="mx-auto mt-6 max-w-2xl text-balance text-lg text-gray-600 leading-relaxed">
                                                {description}
                                            </p>
                                        )}
                                </AnimatedGroup>

                                {(primaryButton || secondaryButton) && (
                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                        {primaryButton && (
                                            <div
                                                key={1}
                                                className="bg-servitec-orange rounded-[14px] border border-servitec-orange p-0.5">
                                                <Button
                                                    asChild
                                                    size="lg"
                                                    className="rounded-xl px-5 text-base bg-servitec-orange hover:bg-orange-600 text-white"
                                                    onClick={() => trackEvent('cta_click', {
                                                        button_type: 'primary',
                                                        button_text: primaryButton,
                                                        destination: primaryButtonLink,
                                                        page: window.location.pathname
                                                    })}>
                                                    <Link to={primaryButtonLink}>
                                                        <span className="text-nowrap">{primaryButton}</span>
                                                    </Link>
                                                </Button>
                                            </div>
                                        )}
                                        {secondaryButton && (
                                            <Button
                                                key={2}
                                                asChild
                                                size="lg"
                                                variant="ghost"
                                                className="h-10.5 rounded-xl px-5 text-gray-700 hover:bg-gray-100"
                                                onClick={() => trackEvent('cta_click', {
                                                    button_type: 'secondary',
                                                    button_text: secondaryButton,
                                                    destination: secondaryButtonLink,
                                                    page: window.location.pathname
                                                })}>
                                                <Link to={secondaryButtonLink}>
                                                    <span className="text-nowrap">{secondaryButton}</span>
                                                </Link>
                                            </Button>
                                        )}
                                    </AnimatedGroup>
                                )}
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Portfólio', href: '/portfolio' },
    { name: 'Quem Somos', href: '/about' },
    { name: 'Contato', href: '/contact' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const location = useLocation()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Função para fechar o menu mobile
    const closeMobileMenu = () => {
        setMenuState(false)
    }
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled ? 'bg-servitec-dark/90 max-w-4xl rounded-2xl backdrop-blur-lg lg:px-5' : 'bg-white/80 backdrop-blur-sm rounded-2xl')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo isScrolled={isScrolled} />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                    className={cn('relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden transition-colors duration-300', isScrolled ? 'text-white' : 'text-gray-900')}>
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm items-center">
                                <li>
                                    <div className="relative">
                                        <ActiveTabIndicator isActive={location.pathname === '/services'}>
                                        <div className={cn(
                                            "px-1 -py-1 rounded-xl transition-all duration-300",
                                            location.pathname === '/services' 
                                                ? "bg-servitec-orange/20 border border-servitec-orange/60" 
                                                : "hover:bg-servitec-orange/5"
                                        )}>
                                                <div className={cn(
                                                    "flex items-center gap-2",
                                                    location.pathname === '/services' && "text-servitec-orange font-medium"
                                                )}>
                                                    <ServicesDropdown isScrolled={isScrolled} />
                                                </div>
                                            </div>
                                        </ActiveTabIndicator>
                                    </div>
                                </li>
                                {menuItems.map((item, index) => {
                                    const isActive = location.pathname === item.href
                                    return (
                                        <li key={index}>
                                            <ActiveTabIndicator isActive={isActive}>
                                                <Link
                                                    to={item.href}
                                                    className={cn(
                                                        'hover:text-servitec-orange block duration-150 transition-colors px-3 py-2 rounded-xl',
                                                        isScrolled ? 'text-white' : 'text-gray-600',
                                                        isActive && 'text-servitec-orange font-medium'
                                                    )}>
                                                    <span>{item.name}</span>
                                                </Link>
                                            </ActiveTabIndicator>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className={cn(
                            "group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent",
                            isScrolled ? "bg-servitec-dark" : "bg-white/95 backdrop-blur-sm"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
                                    <li>
                                    <div className="relative">
                                        <div className={cn(
                                            "px-1 -py-1 rounded-xl transition-all duration-300",
                                            location.pathname === '/services' 
                                                ? "bg-servitec-orange/20 border border-servitec-orange/60" 
                                                : "hover:bg-servitec-orange/5"
                                        )}>
                                            <div className={cn(
                                                "flex items-center gap-2",
                                                location.pathname === '/services' && "text-servitec-orange font-medium"
                                            )}>
                                                <ServicesDropdown onClose={closeMobileMenu} isScrolled={isScrolled} />
                                            </div>
                                        </div>
                                        {/* Sem indicador animado no mobile - apenas fundo sutil */}
                                    </div>
                                    </li>
                                        {menuItems.map((item, index) => {
                                            const isActive = location.pathname === item.href
                                            return (
                                                <li key={index}>
                                                    <Link
                                                        to={item.href}
                                                        onClick={closeMobileMenu}
                                                        className={cn(
                                                            'hover:text-servitec-orange block duration-150 transition-colors px-3 py-2 rounded-xl border-2 border-transparent hover:border-servitec-orange/40',
                                                            isScrolled ? 'text-white' : 'text-gray-900',
                                                            isActive && 'text-servitec-orange font-medium border-servitec-orange/60 bg-servitec-orange/10'
                                                        )}>
                                                        <span>{item.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(
                                        "border-2 text-servitec-orange hover:bg-servitec-orange hover:text-white transition-all duration-300",
                                        isScrolled 
                                            ? "border-servitec-orange/50 text-white hover:border-servitec-orange" 
                                            : "border-servitec-orange"
                                    )}>
                                    <Link to="/about" onClick={closeMobileMenu}>
                                        <span>Quem Somos</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className="bg-servitec-orange hover:bg-orange-600 text-white border-2 border-servitec-orange shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Link to="/contact" onClick={closeMobileMenu}>
                                        <span>Contato</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

    const Logo = ({ className, isScrolled }) => {
        return (
            <div className={cn('flex items-center space-x-3', className)}>
                <LogoIcon className="w-12 h-12" />
                <div>
                    <h1 className={cn('font-heading font-bold text-xl transition-colors duration-300', isScrolled ? 'text-white' : 'text-gray-900')}>Servitec</h1>
                    <p className="text-servitec-orange text-sm">Metalúrgica</p>
                </div>
            </div>
        )
    }
