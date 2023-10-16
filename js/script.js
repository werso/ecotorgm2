const iMaskParams = {
    mask: '+{7} (000) 000-00-00',
    lazy: true,
};

window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('[name=PHONE], [type="tel"]').forEach(phone => {
        IMask(phone, iMaskParams);
    });

    document.querySelectorAll('.menu').forEach(menu => {
        let body = document.querySelector('body');

        let btn = menu.querySelector('.burger-menu-button');

        if (btn !== undefined) {
            btn.addEventListener('click', () => {
                if (menu.classList.contains('active')) {
                    body.classList.remove('overflow-hidden');
                    menu.classList.remove('active');
                } else {
                    body.classList.add('overflow-hidden');
                    menu.classList.add('active');
                }

            })
        }
    });

    document.querySelectorAll('.show-hide').forEach(showHide => {
        let link = showHide.querySelector('.show-hide-link');

        if (link !== undefined) {
            link.addEventListener('click', evt => {
                evt.preventDefault();

                showHide.classList.toggle('active');

                return;
            })
        }
    });

    document.querySelectorAll('.form-group_file label').forEach(fileLabel => {
        let fileInput = fileLabel.querySelector('input[type=file]'),
            fileText = fileLabel.querySelector('span');

        if (fileInput !== undefined && fileText !== undefined) {
            fileInput.addEventListener('change', () => {
                const curFiles = fileInput.files;
                if (curFiles.length === 0) {
                    fileText.textContent = fileInput.getAttribute('placeholder');
                } else {
                    console.log('curFiles', curFiles.length);

                    let text = '';

                    if (curFiles.length > 1) {
                        text = 'Выбрано файлов: '.curFiles.length;
                    } else {
                        let file = curFiles[0];

                        text = file.name;
                    }

                    fileText.textContent = text;
                }
            });
        }
    });

    let mainSlider = new Glide('.js-main-slider', {
        'type': 'carousel',
    }).mount();

    Fancybox.bind();

    document.querySelectorAll('.projects').forEach(projects => {
        projects.querySelectorAll('.projects-heading-item').forEach(item => {
            item.addEventListener('click', evt => {
                evt.preventDefault();

                if (!item.classList.contains('active')) {
                    projects.querySelectorAll('.projects-heading-item.active').forEach(activeItem => {
                        activeItem.classList.remove('active');
                    });
                    projects.querySelectorAll('.projects-content-item.active').forEach(activeItem => {
                        activeItem.classList.remove('active');
                    });

                    item.classList.add('active');

                    let contentItem = projects.querySelector(item.dataset.to);
                    if (contentItem !== null) {
                        contentItem.classList.add('active');
                    }
                }

                return;
            })
        })
    });
    
    document.querySelectorAll('.js-modal-btn').forEach(modalBtn => {
        modalBtn.addEventListener('click', evt => {
            evt.preventDefault();

            return;
        })
    })
});