import { TextProps } from '../../types/text';
import cc from 'classcat';
import styles from './styles.module.scss';

export function Text({
  children,
  className,
  size = "medium",
  bold = false,
  ...props
}: TextProps) {
  const classes = cc({
    [styles.text]: true,
    [styles.bold]: bold,
    [styles[`size-${size}`]]: size,
  });

  return (
    <p className={cc([classes, className])} {...props}>
      {children}
    </p>
  );
}
