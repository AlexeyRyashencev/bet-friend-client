import {observable, computed, action, autorun} from 'mobx';

class AppStore {
    @observable show;

    constructor() {
        this.show = false;
    }

    @computed get isOpenLeftPanel() {
        return this.show;
    }

    @action('toggle left panel')
    toggleLeftPanel() {
        this.show = !this.show;
    }

    @action('show left panel')
    openLeftPanel() {
        this.show = true;
    }

    @action('hide left panel')
    closeLeftPanel() {
        this.show = false;
    }
}

const appStore = new AppStore();

export default appStore;
export {AppStore};
