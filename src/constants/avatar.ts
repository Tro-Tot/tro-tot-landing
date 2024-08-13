export const getDefaultAvatar = (gender: string): string => {
  if (gender.toLowerCase() === 'male') {
    return '../assets/avatar-male.png';
  } else if (gender.toLowerCase() === 'female') {
    return '../assets/avatar-female.png';
  } else {
    return '../assets/avatar-other.png';
  }
};
