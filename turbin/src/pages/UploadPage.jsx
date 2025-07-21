import React from 'react';

function UploadPage({ nameProject }) {
  return (
    <div>
      <div>
        <button>← Back</button>
      </div>

      <div>
        <div>
          <div><b>Name project:</b></div>
          <div>{nameProject}</div>
        </div>

        <div>
          <button>
            Upload files<br />
            <small>Select an upload method below</small>
          </button>
        </div>

        <div>
          <button>
            Upload Folder<br />
            <small>Upload folder with images</small>
          </button>
        </div>

        <div>
          <button>Asset History</button>
        </div>

        <div>
          <button>Check</button>
        </div>
      </div>

      <div>
        <div>
          <div>⬇️</div>
          <div>Thả thư mục/tiệp của bạn vào đây</div>
          <div>hoặc duyệt thư mục / duyệt tiệp</div>
        </div>
      </div>
    </div>
  );
}

export default UploadPage;