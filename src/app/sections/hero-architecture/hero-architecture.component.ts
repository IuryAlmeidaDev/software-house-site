import {
  AfterViewInit,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  ViewChild,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as THREE from 'three';

@Component({
  selector: 'app-hero-architecture',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="copy" data-reveal>
        <span class="eyebrow">N&A Software House / software sob medida</span>

        <h1 class="title">
          <span class="line">Sistemas pensados</span>
          <span class="line emphasis" [style.transform]="kineticTransform">para o seu contexto</span>
          <span class="line">e construídos com precisão.</span>
        </h1>

        <p class="description">
          Desenvolvemos software sob medida com arquitetura sólida, UX refinada
          e execução orientada ao que o seu negócio realmente precisa operar.
        </p>

        <div class="actions">
          <a class="primary" routerLink="/contact">Solicitar projeto</a>
          <a class="secondary" routerLink="/cases">Ver cases</a>
        </div>

        <div class="signal-grid glass">
          <div>
            <strong>Produto sob medida</strong>
            <span>fluxos, regras e operação moldados ao seu cenário</span>
          </div>
          <div>
            <strong>Arquitetura consistente</strong>
            <span>estrutura pensada para evoluir sem gambiarra ornamental</span>
          </div>
          <div>
            <strong>UX com intenção</strong>
            <span>interfaces claras para uso real e decisão rápida</span>
          </div>
        </div>
      </div>

      <div class="stage glass" #stageWrap data-reveal>
        <canvas #canvas></canvas>

        <div class="hud hud-top-left">
          <span>system / live</span>
          <strong>Arquitetura sob medida</strong>
        </div>

        <div class="hud hud-bottom-right">
          <span>interaction</span>
          <strong>depth + motion</strong>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: calc(100vh - 100px);
      display: grid;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 26px;
      align-items: center;
      padding: 40px 0 80px;
    }

    .copy {
      padding: 28px 0;
    }

    .title {
      margin: 22px 0 18px;
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(3rem, 9vw, 6.6rem);
      line-height: 0.92;
      letter-spacing: -0.08em;
    }

    .line {
      display: block;
    }

    .emphasis {
      background: linear-gradient(90deg, #f5f7fa 0%, #d9e0e8 50%, #c7d0da 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      transform-origin: left center;
      transition: transform 160ms ease-out;
    }

    .description {
      max-width: 620px;
      color: var(--muted);
      line-height: 1.8;
      font-size: 1.02rem;
    }

    .actions {
      display: flex;
      gap: 14px;
      margin: 28px 0 26px;
    }

    .primary,
    .secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 56px;
      padding: 0 22px;
      border-radius: 999px;
      border: 1px solid rgba(255,255,255,0.10);
      transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
    }

    .primary {
      background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05));
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05) inset;
    }

    .primary:hover,
    .secondary:hover {
      transform: translateY(-2px);
      border-color: rgba(255,255,255,0.18);
    }

    .signal-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      padding: 16px;
      border-radius: var(--radius);
    }

    .signal-grid div {
      padding: 18px;
      border-radius: 20px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.06);
    }

    .signal-grid strong {
      display: block;
      font-size: 1rem;
      margin-bottom: 8px;
    }

    .signal-grid span {
      color: var(--muted);
      font-size: 0.92rem;
      line-height: 1.6;
    }

    .stage {
      position: relative;
      min-height: 720px;
      border-radius: 38px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.08);
      transform-style: preserve-3d;
      perspective: 1200px;
      background:
        radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 28%),
        radial-gradient(circle at bottom left, rgba(255,255,255,0.03), transparent 24%),
        rgba(255,255,255,0.025);
    }

    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }

    .hud {
      position: absolute;
      padding: 12px 14px;
      border-radius: 18px;
      border: 1px solid rgba(255,255,255,0.10);
      background: rgba(10,12,16,0.36);
      backdrop-filter: blur(12px);
      font-size: 0.78rem;
      line-height: 1.5;
      color: var(--muted);
    }

    .hud strong {
      display: block;
      color: var(--text);
      font-size: 0.95rem;
    }

    .hud-top-left { top: 18px; left: 18px; }
    .hud-bottom-right { right: 18px; bottom: 18px; }

    @media (max-width: 1100px) {
      .hero {
        grid-template-columns: 1fr;
      }

      .stage {
        min-height: 520px;
      }
    }

    @media (max-width: 720px) {
      .signal-grid {
        grid-template-columns: 1fr;
      }

      .actions {
        flex-direction: column;
      }

      .stage {
        min-height: 420px;
      }
    }
  `]
})
export class HeroArchitectureComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) private readonly canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('stageWrap', { static: true }) private readonly stageWrapRef!: ElementRef<HTMLElement>;

  kineticTransform = 'translate3d(0, 0, 0)';

  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    this.setupScene();
    this.bindMouseMotion();
    this.bindKineticScroll();
  }

  private setupScene(): void {
    const host = this.stageWrapRef.nativeElement;
    const canvas = this.canvasRef.nativeElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, host.clientWidth / host.clientHeight, 0.1, 1000);
    camera.position.set(0, 2.8, 10);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.setSize(host.clientWidth, host.clientHeight);

    const root = new THREE.Group();
    scene.add(root);

    const moduleGroup = new THREE.Group();
    root.add(moduleGroup);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#d7dee6'),
      transparent: true,
      opacity: 0.22
    });

    const blockMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d3d9e0'),
      metalness: 0.04,
      roughness: 0.72,
      transparent: true,
      opacity: 0.72,
      transmission: 0.04
    });

    const capMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#eef2f6'),
      metalness: 0.02,
      roughness: 0.4,
      transparent: true,
      opacity: 0.84
    });

    const nodes: THREE.Vector3[] = [];
    const blocks: THREE.Mesh[] = [];

    const gridSize = 4;
    const spacing = 1.15;

    for (let x = -gridSize; x <= gridSize; x += 2) {
      for (let z = -gridSize; z <= gridSize; z += 2) {
        const height = 0.25 + Math.random() * 1.7;
        const width = 0.68 + Math.random() * 0.2;
        const depth = 0.68 + Math.random() * 0.2;

        const geo = new THREE.BoxGeometry(width, height, depth);
        const mesh = new THREE.Mesh(geo, blockMaterial.clone());

        mesh.position.set(x * spacing * 0.5, height * 0.5 - 1.2, z * spacing * 0.5);
        moduleGroup.add(mesh);
        blocks.push(mesh);

        const capGeo = new THREE.BoxGeometry(width * 0.86, 0.05, depth * 0.86);
        const cap = new THREE.Mesh(capGeo, capMaterial.clone());
        cap.position.set(mesh.position.x, mesh.position.y + height * 0.5 + 0.04, mesh.position.z);
        moduleGroup.add(cap);

        nodes.push(new THREE.Vector3(mesh.position.x, cap.position.y, mesh.position.z));
      }
    }

    const linePositions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const current = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const next = nodes[j];
        const distance = current.distanceTo(next);
        if (distance < 1.7) {
          linePositions.push(
            current.x, current.y, current.z,
            next.x, next.y, next.z
          );
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
    moduleGroup.add(lines);

    const pulseDots: THREE.Mesh[] = [];
    const dotGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const dotMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#f4f7fa'),
      transparent: true,
      opacity: 0.9
    });

    nodes.slice(0, 14).forEach((node, index) => {
      const dot = new THREE.Mesh(dotGeo, dotMat.clone());
      dot.position.copy(node);
      dot.position.y += (index % 3) * 0.02;
      root.add(dot);
      pulseDots.push(dot);
    });

    const ambient = new THREE.AmbientLight('#ffffff', 0.9);
    const mainLight = new THREE.PointLight('#ffffff', 1.3, 30);
    mainLight.position.set(4.5, 6, 6);

    const fill = new THREE.PointLight('#cfd7df', 0.7, 20);
    fill.position.set(-5, 2, 4);

    scene.add(ambient, mainLight, fill);

    root.rotation.x = -0.28;
    root.rotation.y = 0.55;

    let targetX = 0;
    let targetY = 0;
    let rafId = 0;

    const onResize = (): void => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const onPointerMove = (event: PointerEvent): void => {
      const bounds = host.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.35;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.22;
    };

    const clock = new THREE.Clock();

    const animate = (): void => {
      const elapsed = clock.getElapsedTime();

      root.rotation.y += (0.55 + targetX - root.rotation.y) * 0.04;
      root.rotation.x += (-0.28 + targetY - root.rotation.x) * 0.04;

      blocks.forEach((block, index) => {
        block.position.y += Math.sin(elapsed * 1.2 + index * 0.35) * 0.0018;
      });

      pulseDots.forEach((dot, index) => {
        dot.scale.setScalar(0.85 + Math.sin(elapsed * 2.2 + index * 0.7) * 0.22);
      });

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };

    this.zone.runOutsideAngular(() => {
      onResize();
      rafId = requestAnimationFrame(animate);
      window.addEventListener('resize', onResize);
      host.addEventListener('pointermove', onPointerMove);
    });

    this.destroyRef.onDestroy(() => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      host.removeEventListener('pointermove', onPointerMove);
      renderer.dispose();

      root.traverse((child: THREE.Object3D) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          const material = child.material as THREE.Material;
          material.dispose();
        }
      });

      linesGeometry.dispose();
      lineMaterial.dispose();
      blockMaterial.dispose();
      capMaterial.dispose();
      dotGeo.dispose();
      dotMat.dispose();
    });
  }

  private bindMouseMotion(): void {
    const host = this.stageWrapRef.nativeElement;

    const move = (event: MouseEvent): void => {
      const rect = host.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      host.style.transform = `rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
    };

    const leave = (): void => {
      host.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    host.addEventListener('mousemove', move);
    host.addEventListener('mouseleave', leave);

    this.destroyRef.onDestroy(() => {
      host.removeEventListener('mousemove', move);
      host.removeEventListener('mouseleave', leave);
    });
  }

  private bindKineticScroll(): void {
    const handler = (): void => {
      const scroll = Math.min(window.scrollY, 500);
      const x = scroll * 0.014;
      const y = scroll * -0.006;
      this.kineticTransform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener('scroll', handler, { passive: true });
    this.destroyRef.onDestroy(() => window.removeEventListener('scroll', handler));
  }
}