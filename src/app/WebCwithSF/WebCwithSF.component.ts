import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-WebCwithSF",
	providers: [TaskMagicService],
	styleUrls: ["./WebCwithSF.component.css"],
	templateUrl: "./WebCwithSF.component.html"
})
export class WebCwithSF extends BaseTaskMagicComponent {}
