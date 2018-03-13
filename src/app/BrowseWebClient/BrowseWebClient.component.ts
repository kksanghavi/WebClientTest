import { Component } from "@angular/core";
import { BaseTaskMagicComponent } from "../magic/src/ui/app.baseMagicComponent";
import { TaskMagicService } from "../magic/src/services/task.magics.service";

@Component({
	selector: "mga-BrowseWebClient",
	providers: [TaskMagicService],
	styleUrls: ["./BrowseWebClient.component.css"],
	templateUrl: "./BrowseWebClient.component.html"
})
export class BrowseWebClient extends BaseTaskMagicComponent {}
