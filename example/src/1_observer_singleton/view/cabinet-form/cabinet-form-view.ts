import DataStorage from '../../data-storage/data-storage';
import { StorageItemName } from '../../data-storage/enums/storage-item-name';
import DefaultFormView from '../default-form-view/default-form-view';
import FormHtmlCreator from '../util/form-element-creator';

export default class CabinetFormView extends DefaultFormView {
    private readonly TEXT_NAME_COMPONENT = 'Личный кабинет';
    private readonly TEXT_LOGIN_FIELD = 'Логин пользователя';

    private storage = DataStorage.getInstance();
    private loginInputElement: HTMLInputElement | null = null;

    constructor() {
        super();

        const resultCreateView = this.createView();
        this.htmlElement = resultCreateView.resultHtmlElement;
        if (resultCreateView.inputHtmlElements) {
            this.loginInputElement = resultCreateView.inputHtmlElements[0];
            this.loginInputElement.addEventListener(
                'keyup',
                this.fieldChangedHandler.bind(this, StorageItemName.USER_LOGIN)
            );
        }

        this.storage.subscribe(StorageItemName.USER_LOGIN, this.loginStorageChangedHandler.bind(this));
    }

    private loginStorageChangedHandler<T>(login: T) {
        if (this.loginInputElement && typeof login === 'string') {
            this.loginInputElement.value = login;
        }
    }
    private fieldChangedHandler(nameField: StorageItemName) {
        if (event && event.target instanceof HTMLInputElement) {
            this.storage.setValue(nameField, event.target.value);
        }
    }
    private createView() {
        const formCreator = new FormHtmlCreator();
        return formCreator.getInputForm(this.TEXT_NAME_COMPONENT, [this.TEXT_LOGIN_FIELD]);
    }
}
