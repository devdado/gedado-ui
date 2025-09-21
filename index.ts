import { ArtRadioGroup } from './src/components/radio-group/radio-group';
import { ArtSelect } from './src/components/select';

const initSelects = () => {
  const initFruitSelect = () => {
    const fruitSelect = document.getElementById('fruit-select') as unknown as ArtSelect;
    fruitSelect.options = [
      { value: '1', name: 'Apple' },
      { value: '2', name: 'Pear' },
      { value: '3', name: 'Orange' },
      { value: '4', name: 'Grape' },
      { value: '5', name: 'Pinneapple' },
    ];
  };

  initFruitSelect();
};

const initRadioButtonGroup = () => {
  const radioGroup = document.getElementById('radio-group') as ArtRadioGroup;
  radioGroup.radioButtons = [
    { id: 'demo-1', value: '1', label: 'Primary', variant: 'primary' },
    { id: 'demo-2', value: '2', label: 'Auxiliary', variant: 'auxiliary' },
    { id: 'demo-3', value: '3', label: 'Success', variant: 'success' },
    { id: 'demo-4', value: '4', label: 'Warning', variant: 'warning' },
    { id: 'demo-5', value: '5', label: 'Error', variant: 'error' },
  ];
  radioGroup.layout = 'vertical';
  radioGroup.addEventListener('update', event => {
    const target = event as CustomEvent;
    console.log(target.detail);
  });
};

initSelects();
initRadioButtonGroup();
