import styles from '@/src/app/ui/atoms/Button/index.module.scss'

type ButtonProps = {
  buttonName: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'tertiary';
};

export default function Button({ buttonName, onClick, type }: ButtonProps) {
  const className = !type ? `${styles.primary}` : `${styles
  [type]}`;
  return (
    <button onClick={onClick} className={className}>
      {buttonName}
    </button>
  );
}