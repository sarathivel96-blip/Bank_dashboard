import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';
import { AuditService } from 'src/app/core/services/audit.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Directive({
  selector: '[appRbac]',
  standalone: true
})
export class RbacDirective {

  private auth = inject(AuthService);
  @Input() set appRbac(role: string) {
    if(this.auth.getRole() === role){
      this.view.createEmbeddedView(this.template);
    } else {
      this.view.clear();
    }
  }
  constructor (
    private template: TemplateRef<any>,
    private view: ViewContainerRef
  ) {}

}
