import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-WebC1",
	providers: [TaskMagicService],
	styleUrls: ["./WebC1.component.css"],
	templateUrl: "./WebC1.component.html"
})
export class WebC1 extends BaseTaskMagicComponent {}
