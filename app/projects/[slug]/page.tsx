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
                        {project.status && (
                            <div className="published" style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                                Status: {project.status}
                            </div>
                        )}
                    </div>
                </header>

                <span className="image featured">
                    <Image
                        src={'../' + project.image}
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

                {project.links && project.links.length > 0 && (
                    <section>
                        <h3>Links</h3>
                        <ul className="actions vertical">
                            {project.links.map((link) => (
                                <li key={link.url}>
                                    <a href={link.url} className="button" target="_blank" rel="noopener noreferrer">
                                        {link.label}
                                    </a>
                                    {link.description && (
                                        <span style={{ display: 'block', fontSize: '0.9em', marginTop: '0.2rem', color: '#666' }}>
                                            {link.description}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {project.references && project.references.length > 0 && (
                    <section style={{ marginTop: '2rem' }}>
                        <h3>References / Inspired By</h3>
                        <ul>
                            {project.references.map((ref) => (
                                <li key={ref.url}>
                                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                        {ref.label || ref.url}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

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
