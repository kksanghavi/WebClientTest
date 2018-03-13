import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { WebClient } from "./WebClient/WebClient.component";

import { WebClientCalled } from "./WebClientCalled/WebClientCalled.component";

import { BrowseWebClient } from "./BrowseWebClient/BrowseWebClient.component";

import { WebCwithSF } from "./WebCwithSF/WebCwithSF.component";

import { WebC1 } from "./WebC1/WebC1.component";

import { WebC2 } from "./WebC2/WebC2.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		WebClient: WebClient,

		WebClientCalled: WebClientCalled,

		BrowseWebClient: BrowseWebClient,

		WebCwithSF: WebCwithSF,

		WebC1: WebC1,

		WebC2: WebC2
	};

	static ComponentArray: any[] = [
		WebClient,

		WebClientCalled,

		BrowseWebClient,

		WebCwithSF,

		WebC1,

		WebC2
	];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}

	public getTitle(): string {
		return "WebClientTest";
	}
}
