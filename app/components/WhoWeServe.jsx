"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Building2, Briefcase } from "lucide-react";
import styles from "./WhoWeServe.module.css";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

const ICON_MAP = {
  GraduationCap,
  Building2,
  Briefcase,
};

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function WhoWeServe({ whoWeServe }) {
  const [serveRef, serveVisible] = useVisible();

  return (
    <section
      ref={serveRef}
      id="who-we-serve"
      className={`${styles.serveSection} ${serveVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Who We Serve</span>
        </div>

        <div className={styles.audienceList}>
          {whoWeServe.map((a, i) => {
            const Icon = ICON_MAP[a.icon];
            const isEven = i % 2 === 1;
            return (
              <div
                key={a._key}
                className={`${styles.audienceRow} ${isEven ? styles.audienceRowReverse : ""}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.audienceImageWrap}>
                  <Image
                    src={urlFor(a.image).width(800).url()}
                    alt={a.image?.alt || a.title}
                    fill
                    className={styles.audienceImage}
                  />
                </div>
                <div className={styles.audienceContent}>
                  <div className={styles.cardTitleRow}>
                    <div className={styles.cardIconWrap}>
                      {Icon && (
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className={styles.cardIcon}
                        />
                      )}
                    </div>
                    <h3 className={styles.cardTitle}>{a.title}</h3>
                  </div>
                  <p className={styles.cardBody}>{a.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
