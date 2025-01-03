const Download = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 16L7 11H10V4H14V11H17L12 16Z" fill="currentColor" />
      <path
        d="M20 18H4V11H2V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V11H20V18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Download;
