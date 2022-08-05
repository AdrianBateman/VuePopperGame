export default function buttonClickAnimation(element) {
  element.animate(
    [
      {
        transform: 'translateY(2px)',
        boxShadow: 'none',
      },
      {
        transform: 'translateY(0)',
        boxShadow: '1px 1px 5px hsl(296, 100%, 70%)',
      },
    ],
    {
      duration: 150,
      iterations: 1,
    },
  );
}
