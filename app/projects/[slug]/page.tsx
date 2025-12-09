import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';

import PageWrapper from '../../components/PageWrapper';
import projects from '@/data/projects';

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export const dynamicParams = false;

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <PageWrapper>
            <article className="post">
                <header>
                    <div className="title">
                        <h2>{project.title}</h2>
                        {project.subtitle && <p>{project.subtitle}</p>}
                    </div>
                    <div className="meta">
                        <time className="published">
                            {dayjs(project.date).format('MMMM, YYYY')}
                        </time>
                    </div>
                </header>

                <span className="image featured">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={500}
                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        priority
                    />
                </span>

                <div style={{ marginBottom: '2rem' }}>
                    <p>{project.desc}</p>
                </div>

                <section>
                    <h3>Links</h3>
                    <ul className="actions">
                        {project.github && (
                            <li>
                                <a href={project.github} className="button" target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </a>
                            </li>
                        )}
                        {project.publication && (
                            <li>
                                <a href={project.publication} className="button" target="_blank" rel="noopener noreferrer">
                                    Related Publication / Results
                                </a>
                            </li>
                        )}
                        {/* Fallback to original link if meant for something else and not covered above */}
                        {project.link && project.link !== project.github && project.link !== project.publication && (
                            <li>
                                <a href={project.link} className="button" target="_blank" rel="noopener noreferrer">
                                    Visit Project
                                </a>
                            </li>
                        )}
                    </ul>
                </section>

                <div style={{ marginTop: '3rem' }}>
                    <Link href="/projects" className="button small">
                        &larr; Back to Research & Projects
                    </Link>
                </div>

            </article>
        </PageWrapper>
    );
};

export default ProjectPage;
