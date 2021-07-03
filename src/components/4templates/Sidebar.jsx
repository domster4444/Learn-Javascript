import React from 'react';
import { useEffect } from 'react';
export default function Sidebar() {
  useEffect(() => {
    //?sidebar admin animation

    let btn = document.querySelector('#btn');

    let sidebar = document.querySelector('.sidebar');

    btn.addEventListener('mouseenter', () => {
      sidebar.classList.toggle('active');
      if (btn.classList.contains('bx-menu')) {
        btn.classList.replace('bx-menu', 'bx-menu-alt-right');
      } else {
        btn.classList.replace('bx-menu-alt-right', 'bx-menu');
      }
    });
    sidebar.addEventListener('mouseenter', () => {
      sidebar.classList.add('active');
    });
    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });
    btn.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
  }, []);
  return (
    <>
      <div className="sidebar">
        <div className="logo_content">
          <div className="logo">
            <i className="bx bx-shape-triangle"></i>
            <div className="logo_name">Abian</div>
          </div>
          <i className="bx bx-menu" id="btn" />
        </div>
        <ul className="nav_list">
          <li>
            <i className="bx bx-search" />
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user" />
              <span className="links_name">User</span>
            </a>
            <span className="tooltip">User</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-chat" />
              <span className="links_name">Messages</span>
            </a>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2" />
              <span className="links_name">Analytics</span>
            </a>
            <span className="tooltip">Analytics</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-folder" />
              <span className="links_name">File Manager</span>
            </a>
            <span className="tooltip">Files</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cart-alt" />
              <span className="links_name">Order</span>
            </a>
            <span className="tooltip">Order</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-heart" />
              <span className="links_name">Saved</span>
            </a>
            <span className="tooltip">Saved</span>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog" />
              <span className="links_name">Setting</span>
            </a>
            <span className="tooltip">Setting</span>
          </li>
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              {/*<img src="profile.jpg" alt="">*/}
              <div className="name_job">
                <div className="name">Prem Shahi</div>
                <div className="job">Web Designer</div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out" />
          </div>
        </div>
      </div>
    </>
  );
}
