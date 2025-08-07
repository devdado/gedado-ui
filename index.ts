import { ArtTextInput } from './src/components/input';
import { type IArtSelectOption, ArtSelect } from './src/components/select';

const addControlEventListeners = () => {
  document.addEventListener('art-control-input', event => {
    console.log('art-control-input', event);
  });

  document.addEventListener('art-control-change', event => {
    console.log('art-control-change', event);
  });
};

const initInputs = () => {
  const initFirstnameInput = () => {
    const firstnameInput = document.getElementById('firstname-input') as unknown as ArtTextInput;
    const datalist = {
      name: 'names',
      options: ['Gerardo', 'Daniel', 'César', 'Alonso', 'Aida', 'Diana'],
    };
    firstnameInput.datalist = datalist;
  };

  initFirstnameInput();
};

const initSelects = () => {
  const initFruitSelect = () => {
    const fruitSelect = document.getElementById('fruit-select') as unknown as ArtSelect;
    const options: IArtSelectOption[] = [
      { value: '1', name: 'Apple' },
      { value: '2', name: 'Pear' },
      { value: '3', name: 'Orange' },
      { value: '4', name: 'Grape' },
      { value: '5', name: 'Pinneapple' },
    ];
    fruitSelect.options = options;
  };

  initFruitSelect();
};

initInputs();
initSelects();
addControlEventListeners();
