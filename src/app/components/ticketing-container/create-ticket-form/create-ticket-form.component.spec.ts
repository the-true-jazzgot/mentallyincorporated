import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTicketFormComponent } from './create-ticket-form.component';

describe('CreateTicketFormComponent', () => {
  let component: CreateTicketFormComponent;
  let fixture: ComponentFixture<CreateTicketFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTicketFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTicketFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
