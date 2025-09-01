import { type IArtSelectOption, ArtSelect } from './src/components/select';

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

initSelects();
