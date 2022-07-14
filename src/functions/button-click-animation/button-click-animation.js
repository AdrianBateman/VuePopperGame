export default function buttonClickAnimation(element) {
    element.animate(
        [
          { transform: "translateY(2px)" },
          { transform: "translateY(0)" },
        ],
        {
          duration: 150,
          iterations: 1,
        },
      );
}