'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';

const footerLinks = [
	{
		label: 'Navegação',
		links: [
			{ title: 'Home', href: '#home' },
			{ title: 'Quem Somos', href: '#about' },
			{ title: 'Serviços', href: '#services' },
			{ title: 'Portfólio', href: '#portfolio' },
			{ title: 'Contato', href: '#contact' },
		],
	},
	{
		label: 'Empresa',
		links: [
			{ title: 'Sobre Nós', href: '/about' },
			{ title: 'Nossa História', href: '/history' },
			{ title: 'Política de Privacidade', href: '/privacy' },
			{ title: 'Termos de Serviço', href: '/terms' },
		],
	},
	{
		label: 'Serviços',
		links: [
			{ title: 'Estruturas Metálicas', href: '/services' },
			{ title: 'Telhados e Galpões', href: '/services' },
			{ title: 'Caixas d\'Água de Aço', href: '/services' },
			{ title: 'Escadas', href: '/services' },
			{ title: 'Tubulações Industriais', href: '/services' },
			{ title: 'Soldagens Especiais', href: '/services' },
		],
	},
	{
		label: 'Redes Sociais',
		links: [
			{ title: 'Facebook', href: '#', icon: FacebookIcon },
			{ title: 'Instagram', href: '#', icon: InstagramIcon },
			{ title: 'Youtube', href: '#', icon: YoutubeIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
		],
	},
];

export function Footer() {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t border-gray-700 bg-servitec-dark bg-[radial-gradient(35%_128px_at_50%_0%,rgba(249,115,22,0.1),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-servitec-orange/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center space-x-3">
						<div className="w-12 h-12 bg-gradient-to-br from-servitec-orange to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
							<span className="text-white font-bold text-xl">S</span>
						</div>
						<div>
							<h3 className="text-xl font-heading font-bold text-white">Servitec</h3>
							<p className="text-servitec-orange text-sm">Metalúrgica Industrial</p>
						</div>
					</div>
					<p className="text-gray-300 text-sm">
						Soluções metálicas e industriais com qualidade, segurança e entrega no prazo.
					</p>
					<p className="text-gray-300 text-xs">
						© {new Date().getFullYear()} Servitec. Todos os direitos reservados.
					</p>
					<p className="text-gray-300 text-xs">
						CNPJ: 00.000.000/0001-00
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-semibold text-white mb-4">{section.label}</h3>
								<ul className="text-gray-300 mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												onClick={(e) => {
													if (link.href.startsWith('#')) {
														e.preventDefault();
														scrollToSection(link.href.replace('#', ''));
													}
												}}
												className="hover:text-servitec-orange inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

function AnimatedContainer({ className, delay = 0.1, children }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
