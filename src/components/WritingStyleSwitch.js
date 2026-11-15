import React, {useEffect, useId, useState} from 'react';
import {styleGuides, useWritingStyle} from './WritingStyle';
import styles from './WritingStyleSwitch.module.css';

function WritingStyleHelp() {
  const id = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function dismissOnEscape(event) {
      if (event.key === 'Escape') setOpen(false);
    }

    document.addEventListener('keydown', dismissOnEscape);
    return () => document.removeEventListener('keydown', dismissOnEscape);
  }, [open]);

  return (
    <div
      onPointerEnter={(event) => {
        if (event.pointerType === 'mouse') setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === 'mouse' && !event.currentTarget.querySelector(':focus-visible')) {
          setOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
      <button
        type="button"
        className={styles.helpButton}
        aria-label="About writing styles"
        aria-expanded={open}
        aria-controls={id}
        aria-describedby={id}
        onFocus={(event) => {
          if (event.currentTarget.matches(':focus-visible')) setOpen(true);
        }}
        onClick={(event) => {
          const mouseClick = event.nativeEvent.pointerType === 'mouse';
          setOpen((wasOpen) => mouseClick || !wasOpen);
        }}>
        <span aria-hidden="true">?</span>
      </button>
      <p id={id} className={styles.helpText} hidden={!open}>
        Choose Microsoft or Google to switch writing styles across the portfolio.
      </p>
    </div>
  );
}

export default function WritingStyleSwitch() {
  const id = useId();
  const {style, setStyle} = useWritingStyle();

  return (
    <div className={styles.switch}>
      <fieldset className={styles.options}>
        <legend className={styles.srOnly}>Writing style</legend>
        {Object.entries(styleGuides).map(([value, {label}]) => (
          <label key={value} className={styles.option}>
            <input
              className={styles.srOnly}
              type="radio"
              name={id}
              value={value}
              checked={style === value}
              onChange={() => setStyle(value)}
            />
            <span>{label}</span>
          </label>
        ))}
      </fieldset>
      <WritingStyleHelp />
    </div>
  );
}
