'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">activities documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivitiesModule.html" data-type="entity-link" >ActivitiesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ActivitiesModule-20d132ebbf85611b10ac2cc3e7346737843bdaa3163102fd7929374303bb89be5d2d0b925716eb95d64feff18d8fa8a1d40f7a7426b9fbcaaa0a42555e3006af"' : 'data-target="#xs-injectables-links-module-ActivitiesModule-20d132ebbf85611b10ac2cc3e7346737843bdaa3163102fd7929374303bb89be5d2d0b925716eb95d64feff18d8fa8a1d40f7a7426b9fbcaaa0a42555e3006af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ActivitiesModule-20d132ebbf85611b10ac2cc3e7346737843bdaa3163102fd7929374303bb89be5d2d0b925716eb95d64feff18d8fa8a1d40f7a7426b9fbcaaa0a42555e3006af"' :
                                        'id="xs-injectables-links-module-ActivitiesModule-20d132ebbf85611b10ac2cc3e7346737843bdaa3163102fd7929374303bb89be5d2d0b925716eb95d64feff18d8fa8a1d40f7a7426b9fbcaaa0a42555e3006af"' }>
                                        <li class="link">
                                            <a href="injectables/ActivitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivitiesPageModule.html" data-type="entity-link" >ActivitiesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ActivitiesPageModule-75f32f46c992c38b04b51aa0d77660b2adb7619d2421a5fb1331135d24b5892aae242be2df736383bfcb11968bdea34470bab86fee80a8d1437c2bc675db7a18"' : 'data-target="#xs-components-links-module-ActivitiesPageModule-75f32f46c992c38b04b51aa0d77660b2adb7619d2421a5fb1331135d24b5892aae242be2df736383bfcb11968bdea34470bab86fee80a8d1437c2bc675db7a18"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivitiesPageModule-75f32f46c992c38b04b51aa0d77660b2adb7619d2421a5fb1331135d24b5892aae242be2df736383bfcb11968bdea34470bab86fee80a8d1437c2bc675db7a18"' :
                                            'id="xs-components-links-module-ActivitiesPageModule-75f32f46c992c38b04b51aa0d77660b2adb7619d2421a5fb1331135d24b5892aae242be2df736383bfcb11968bdea34470bab86fee80a8d1437c2bc675db7a18"' }>
                                            <li class="link">
                                                <a href="components/ActivitiesDetailsPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesDetailsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActivitiesPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivitiesPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivitiesRoutingModule.html" data-type="entity-link" >ActivitiesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ff7e12f4ec5610b6c56a2293fe46e58ae437ace71401fd470091ea1dec7f8dcfbff0eeae366f1cfd9df0be71d0d39425697e4d9daaf21bbf8132c86b51803b74"' : 'data-target="#xs-components-links-module-AppModule-ff7e12f4ec5610b6c56a2293fe46e58ae437ace71401fd470091ea1dec7f8dcfbff0eeae366f1cfd9df0be71d0d39425697e4d9daaf21bbf8132c86b51803b74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ff7e12f4ec5610b6c56a2293fe46e58ae437ace71401fd470091ea1dec7f8dcfbff0eeae366f1cfd9df0be71d0d39425697e4d9daaf21bbf8132c86b51803b74"' :
                                            'id="xs-components-links-module-AppModule-ff7e12f4ec5610b6c56a2293fe46e58ae437ace71401fd470091ea1dec7f8dcfbff0eeae366f1cfd9df0be71d0d39425697e4d9daaf21bbf8132c86b51803b74"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-31f8dec823e4417884c3419023ec679b0dc108f9cb5eaf688fe679b39a2c5986804715b426f37abe773694403f956e91e5072653d335693f3ffb298d788a6379"' : 'data-target="#xs-components-links-module-AuthModule-31f8dec823e4417884c3419023ec679b0dc108f9cb5eaf688fe679b39a2c5986804715b426f37abe773694403f956e91e5072653d335693f3ffb298d788a6379"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-31f8dec823e4417884c3419023ec679b0dc108f9cb5eaf688fe679b39a2c5986804715b426f37abe773694403f956e91e5072653d335693f3ffb298d788a6379"' :
                                            'id="xs-components-links-module-AuthModule-31f8dec823e4417884c3419023ec679b0dc108f9cb5eaf688fe679b39a2c5986804715b426f37abe773694403f956e91e5072653d335693f3ffb298d788a6379"' }>
                                            <li class="link">
                                                <a href="components/FormFrameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormFrameComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthPageModule.html" data-type="entity-link" >AuthPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthPageModule-c9c3ffe5061740a643b41de45f6ee22dc0711b8e513d5cd36a7a4b4b2e84d0db0715bea160cec14a05fe97f27d262ff4e73bedd738fc4ab764d43642d0949076"' : 'data-target="#xs-components-links-module-AuthPageModule-c9c3ffe5061740a643b41de45f6ee22dc0711b8e513d5cd36a7a4b4b2e84d0db0715bea160cec14a05fe97f27d262ff4e73bedd738fc4ab764d43642d0949076"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthPageModule-c9c3ffe5061740a643b41de45f6ee22dc0711b8e513d5cd36a7a4b4b2e84d0db0715bea160cec14a05fe97f27d262ff4e73bedd738fc4ab764d43642d0949076"' :
                                            'id="xs-components-links-module-AuthPageModule-c9c3ffe5061740a643b41de45f6ee22dc0711b8e513d5cd36a7a4b4b2e84d0db0715bea160cec14a05fe97f27d262ff4e73bedd738fc4ab764d43642d0949076"' }>
                                            <li class="link">
                                                <a href="components/AuthPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgetPasswordPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link" >DashboardPageModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FireModule.html" data-type="entity-link" >FireModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-c17301bab97eaaa509e3cbe1f882fc33358c8451f14a59fea98bf624a06914a1e1e1d17b89db28f189bb87ead8ad758df0d40bb6eba7a024b49c8818d9369ce0"' : 'data-target="#xs-components-links-module-PagesModule-c17301bab97eaaa509e3cbe1f882fc33358c8451f14a59fea98bf624a06914a1e1e1d17b89db28f189bb87ead8ad758df0d40bb6eba7a024b49c8818d9369ce0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-c17301bab97eaaa509e3cbe1f882fc33358c8451f14a59fea98bf624a06914a1e1e1d17b89db28f189bb87ead8ad758df0d40bb6eba7a024b49c8818d9369ce0"' :
                                            'id="xs-components-links-module-PagesModule-c17301bab97eaaa509e3cbe1f882fc33358c8451f14a59fea98bf624a06914a1e1e1d17b89db28f189bb87ead8ad758df0d40bb6eba7a024b49c8818d9369ce0"' }>
                                            <li class="link">
                                                <a href="components/AppPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ActivityItemComponent.html" data-type="entity-link" >ActivityItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateActivityItemComponent.html" data-type="entity-link" >CreateActivityItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateActivityModal.html" data-type="entity-link" >CreateActivityModal</a>
                            </li>
                            <li class="link">
                                <a href="components/ForgetPasswordFormComponent.html" data-type="entity-link" >ForgetPasswordFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SigninFormComponent.html" data-type="entity-link" >SigninFormComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SignupFormComponent.html" data-type="entity-link" >SignupFormComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Environment.html" data-type="entity-link" >Environment</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});