import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AllusersComponent } from './allusers/allusers.component';
import { UserchartsComponent } from './usercharts/usercharts.component';
import { MaterialModule } from './material/Material module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdduserComponent, AllusersComponent, MaterialModule,UserchartsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'project';

  sendEditorContentAsTxt() {
  const textContent = '<div><h1>Hello, World!</h1> <p>This is a sample HTML content from the editor.</p></div>';
  const blob = new Blob([textContent], { type: 'text/plain' });
  // const url = window.URL.createObjectURL(blob);
  // const a = document.createElement('a');
  // a.href = url;
  // console.log(a);
  // a.download = 'editor-content.txt';
  // a.click();
  // window.URL.revokeObjectURL(url);
  // window.open(url);

  // const file = new File([blob], 'editor-content.txt', { type: 'text/plain' });

    // const formData = new FormData();
    // formData.append('file', file);
    // console.log(formData);

  //  const reader = new FileReader();
  //  reader.onload = () => {
  //     const htmlContent = reader.result as string;
  //     console.log('HTML content:', htmlContent);
  //   };

  //   reader.readAsText('file:///C:/Users/HP/Documents/editor-content.txt');
}

onFileSelected(event: any): void {
  const file = event.target.files[0]; // Get the selected file

  if (file) {
    const reader = new FileReader();

    // Read the file content as text
    reader.onload = (e: any) => {
      const fileContent = e.target.result;  // This is the content of the file
      console.log(fileContent);  // Use the file content as needed
    };

    console.log(reader.readAsText(file));  // Read the file as text
  }
}
}
