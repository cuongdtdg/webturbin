import React from 'react';

function SettingsPage() {
  return (
    <div>
      <div>
        <button>← Back</button>
      </div>

      <div>
        <button>Log Out</button>
      </div>

      <div>
        <h2>Change password</h2>

        <form>
          <div>
            <label>
              * Current password<br />
              <input type="password" />
            </label>
            <div>
              <button type="button">Forget Password ?</button>
            </div>
          </div>

          <div>
            <label>
              * Password<br />
              <input type="password" />
            </label>
          </div>

          <div>
            <label>
              * Confirm Password<br />
              <input type="password" />
            </label>
          </div>

          <div>
            <button type="submit">Update Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;