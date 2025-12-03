import style from './style.module.css';

type ButtonProps = React.ComponentProps<'button'> & {
  title: string;
}

function Button({ title, ...rest }: ButtonProps) {
  return (
    <button type="button" className={style.button} {...rest}>
      {title}
    </button>
  );
}

export { Button };