export const manageClasses = () => {
  const elem = document.querySelector('.one')
  elem.classList.add('selected')

  const elem2 = document.querySelector('.two');
  elem2.classList.remove('selected');

  const elem3 = document.querySelector('.three');
  elem3.classList.toggle('three_done');

  const elem4 = document.querySelector('.four');
  elem4.classList.contains('some-class');
  elem4.classList.add('another-class')

}
