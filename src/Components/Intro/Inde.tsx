import { useEffect, useRef } from "react";
import "./styles.modules.css";
import ContainerFluid from "../ContainerFluid";
import Container from "../Container";

export function Intro() {
  const heroRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleScroll = () => {
      const offset = window.scrollY;
      hero.style.transform = `translateY(${offset * 0.4}px) scale(1.15)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="intro">
      <ContainerFluid>
        <div ref={heroRef} className="intro__image" />
      </ContainerFluid>

      <div className="intro__overlay" />

      <header className="intro__header">
        <span className="intro__logo">Lita Fer</span>
      </header>

      <Container>
        <section className="intro__hero">
          <h1 className="intro__title">
            Exceptional glazing
            <span> for those who build</span>
            <span> with vision</span>
          </h1>
        </section>
      </Container>

      <Container>
        <section className="intro__content">
          <div className="intro__divider" />

          <div className="intro__tag">
            <span className="intro__tag-icon">◆</span>
            <span className="intro__tag-text">Glazing Specialists</span>
          </div>

          <p className="intro__text">
            We design and install bespoke glass systems for ambitious
            architectural projects. Every pane reflects our commitment to
            clarity, quality, and collaboration.
          </p>
        </section>
      </Container>
    </main>
  );
}
