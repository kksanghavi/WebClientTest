import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-WebClient",
	providers: [TaskMagicService],
	styleUrls: ["./WebClient.component.css"],
	templateUrl: "./WebClient.component.html"
})
export class WebClient extends BaseTaskMagicComponent {}
