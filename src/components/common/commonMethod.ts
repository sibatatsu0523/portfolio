export function levelToStar(num :number | null): any {
  let stars = '';
  if(num ==null){return ''};
  for (let i=0; i<num; i++) { 
    stars = stars.concat('★')
  }

  for (let i=0; i<5-num; i++) { 
    stars = stars.concat('☆')
  }
  return stars;
}