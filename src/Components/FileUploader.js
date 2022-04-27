import React
 from "react";
class FileUploader extends React.Component {
  
  fileUpload() {
    document.querySelector('#fileUpload').addEventListener('change', event => {
      handleImageUpload(event)
    })
    const handleImageUpload = event => {
      const files = event.target.files
      const formData = new FormData()
      formData.append('file', files[0])
      const apiUrl = 'http://localhost:8081/api/v1/files/upload';
      fetch(apiUrl, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
    }
  }
  render() {
    return (
      <div className="shopping-list">
        <input type="file" id="fileUpload" />
        <h1 onClick={this.fileUpload}>File Uploader</h1>
      </div>
    );
  }
}
export default  FileUploader;