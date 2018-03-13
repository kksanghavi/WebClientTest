import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-WebClientCalled",
	providers: [TaskMagicService],
	styleUrls: ["./WebClientCalled.component.css"],
	templateUrl: "./WebClientCalled.component.html"
})
export class WebClientCalled extends BaseTaskMagicComponent {}
