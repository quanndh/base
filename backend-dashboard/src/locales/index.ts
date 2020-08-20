import flatten from 'flat';
import label from './label.json';
import button from './button.json';

export default {
  label: flatten<Record<string, any>, typeof label>(label, {
    delimiter: '_',
  }),
  button: flatten<Record<string, any>, typeof label>(button, {
    delimiter: '_',
  }),
};
