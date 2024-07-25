interface Props {
  color?: string;
  w?: string;
  h?: string;
}

function IconChevronRight(props: Props) {
  const { color, w, h } = props;

  return (
    <svg
      fill="none"
      stroke={color || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height={h}
      width={w}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default IconChevronRight;
