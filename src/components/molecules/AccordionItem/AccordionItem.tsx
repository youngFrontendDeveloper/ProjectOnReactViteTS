import styles from './AccordionItem.module.scss';
import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: string;
  isOpen: boolean;
}

interface AccordionItemProps {
  item: AccordionItem;
}

export default function AccordionItem({ item }: AccordionItemProps) {
  const [isActive, setIsActive] = useState<boolean>(item.isOpen);
  const togglePanel = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles['accordion-item']}>
      <div
        className={
          isActive
            ? `${styles['accordion-item__header-wrap']} ${styles['accordion-item__header-wrap--margin']}`
            : styles['accordion-item__header-wrap']
        }
        onClick={() => togglePanel()}
      >
        <p className={styles['accordion-item__header']}>{item.title}</p>
        <button
          type="button"
          className={
            isActive
              ? `${styles['accordion-item__button']} ${styles['accordion-item__button--open']}`
              : styles['accordion-item__button']
          }
          aria-label={`${isActive ? 'Close the list' : 'Open the list'}`}
        >
          <img
            src="/images/plus-icon.svg"
            aria-hidden="true"
            width={25}
            height={25}
            loading="lazy"
          />
        </button>
      </div>
      <p
        className={
          isActive
            ? `${styles['accordion-item__content']} ${styles['open']}`
            : `${styles['accordion-item__content']}`
        }
      >
        {item.content}
      </p>
    </div>
  );
}
