import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-WebC2",
	providers: [TaskMagicService],
	styleUrls: ["./WebC2.component.css"],
	templateUrl: "./WebC2.component.html"
})
export class WebC2 extends BaseTaskMagicComponent {}
