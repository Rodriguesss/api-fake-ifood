'use strict';
const date = require('../app/utils/dateFormatter');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('items', [{
      name: 'Mr. Metabolismo (Prato do Dia)',
      description: 'Filé de tilápia, arroz branco, saladinha Mr. Fit e molho caesar. Obs: Esse prato não pode sofrer alterações.',
      subdescription: 'Serve 1 pessoa',
      price: 26.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202106221049_8G7D_i.jpg',
      type: 'Prato do Dia',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Monte Sua Salada',
      description: 'Agora você monta a salada do jeito que seu paladar gosta!!!',
      subdescription: 'Serve 1 pessoa',
      price: 25.40,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202107091239_0Q28_i.jpg',
      type: 'Novidades',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Parmegiana Fit',
      description: 'Frango  ou Alcatra empanados e grelhados ao molho sugo coberto com queijo minas ou parmesão. Acompanhado de arroz branco ou integral, macarrão integral ou purê de batata doce e salada Mr. Fit: alface crespa, tomate, cenoura e molho caesar.',
      subdescription: 'Serve 1 pessoa',
      price: 31.40,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202107291745_6B4N_i.jpg',
      type: 'Novidades',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Monte Sua Massa',
      description: 'Agora você monta sua massa do jeito com macarrão integral, molho natural e complementos saudáveis.',
      subdescription: 'Serve 1 pessoa',
      price: 18.95,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202106251732_15TQ_i.jpg',
      type: 'Novidades',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Biscoito de Tapioca Coco',
      description: 'Biscoito de tapioca sabor Coco, sem glúten, zero açúcar e vegano.',
      subdescription: 'Serve 1 pessoa',
      price: 6.55,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202108111444_FU6H_i.jpg',
      type: 'Novidades',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Prato Kids',
      description: 'Filé de frango ou bife de alcatra, arroz branco, saladinha Mr. Fit (alface crespa, tomate e cenoura) e chips de batata doce.',
      subdescription: 'Serve 1 pessoa',
      price: 18.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f20a711b-66cf-42a4-b40e-000debe4af7c/202105161534_P7FJ_.jpeg',
      type: 'Refeições',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Mr. Frangolino',
      description: 'Filé de frango, feijão, carboidrato a escolha (arroz branco, integral, macarrão integral ou purê de batata doce) e saladinha mr fit, alface crespa, tomate, cenoura, e molho caeser.',
      subdescription: 'Serve 1 pessoa',
      price: 23.50,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a5245bb9-4ae1-4299-bc9c-b54d11157863/201909191444_Z0wL_f.jpg',
      type: 'Refeições',
      storeId: 1,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Bombom Árvore Ao Leite Flowpack 78g',
      description: 'Bombons de chocolate ao leite com recheio sabor trufa ao leite decorado artesanalmente. Ideal para presentear ou saborear em família!',
      subdescription: 'Serve 1 pessoa (78g)',
      price: 14.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202111081141_T58P_i.jpg',
      type: 'O Natal chegou!',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Bombom Árvore Branco Flowpack 78g',
      description: 'Bombons de chocolate ao leite com recheio sabor panettone com gotas de chocolate coberto com chocolate branco. Ideal para presentear ou saborear em família!',
      subdescription: 'Serve 1 pessoa (78g)',
      price: 14.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202111081143_4542_i.jpg',
      type: 'O natal chegou!',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Caixa Clássicos Trufas Sortidos 180g',
      description: 'Trufas de chocolate ao leite e trufas de chocolate branco decorados. Sabores mágicos para momentos deliciosos!',
      subdescription: '',
      price: 41.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202111081159_7518_i.jpg',
      type: 'O natal chegou!',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Caixa Feliz Natal',
      description: `Sticks de chocolate ao leite com recheio de trufa de chocolate ao leite e cookies'n cream coberto com chocolate branco. Bombons de chocolate ao leite com recheio sabor fondue de morango, 1 pinheiro de chocolate ao leite decorado e 1 Papai Noel decorado com chocolate intenso.`,
      subdescription: '',
      price: 29.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202111081628_Q10N_i.jpg',
      type: 'O natal chegou!',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Tablete Dream mil folhas 130g',
      description: `Tablete de chocolate ao leite com recheio cremoso sabor mil-folhas e pedacinhos de waffer crocante.`,
      subdescription: '',
      price: 17.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202107271412_DN7J_f.png',
      type: 'Linha Dreams',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Tablete Dream torta de maracujá 130g',
      description: `Tablete de chocolate ao leite com recheio sabor Torta de maracujá, com biscoito e recheio cremoso.`,
      subdescription: '',
      price: 29.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/f728fa97-5c35-4ee6-a8a4-42e1554899db/202107271418_45B6_f.png',
      type: 'Linha Dreams',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Trufa de morango 30g',
      description: `Trufa de chocolate ao leite com recheio sabor morango!`,
      subdescription: '',
      price: 3.50,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/34261781-f0a5-402f-bfae-1eff5d3ad594/202003262013_vT4R_f.png',
      type: 'Trufas 30g',
      storeId: 2,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Combos Promocionais',
      description: ``,
      subdescription: '',
      price: 20.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8d4a3291-4a77-40f3-a7c9-61fdf5435fd8/202101042107_38tu_f.png',
      type: 'Combos Promocionais',
      storeId: 3,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Monte seu Açai',
      description: ``,
      subdescription: '',
      price: 10.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8d4a3291-4a77-40f3-a7c9-61fdf5435fd8/202101260858_HNa0_.jpeg',
      type: 'Monte seu Açai',
      storeId: 3,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Barca 600ml de açaí  + 6 adicionais',
      description: ``,
      subdescription: 'Serve 3 pessoas',
      price: 65.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/34261781-f0a5-402f-bfae-1eff5d3ad594/202003262013_vT4R_f.png',
      type: 'Barca',
      storeId: 3,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Barca 600ml de açaí  + 6 adicionais',
      description: ``,
      subdescription: 'Serve 2 pessoas',
      price: 32.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/8d4a3291-4a77-40f3-a7c9-61fdf5435fd8/202101251511_LyKq_.jpeg',
      type: 'Barca',
      storeId: 3,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Pastel de Camarão',
      description: `Pasteis recheados com alho poró, camarão e cream cheese.- 8 unidades`,
      subdescription: '',
      price: 35.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/c23cc608-ab91-4674-b052-78b1016562bd/202006252035_TW5J_.jpeg',
      type: 'Destaques',
      storeId: 4,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Pedidos para seu jantar, so chamar no whats 9 1234 5678',
      description: ``,
      subdescription: '',
      price: 0.01,
      image_url: '',
      type: 'Kimono Jantar',
      storeId: 4,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Espaguete',
      description: ``,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/201911211910_3wz5_a.jpg',
      type: 'Macarrão',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Espaguete Integral',
      description: ``,
      subdescription: '',
      price: 16.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/201911211911_R23G_.jpeg',
      type: 'Macarrão',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Penne',
      description: ``,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/201911211908_FQ2V_m.jpg',
      type: 'Macarrão',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Talharim',
      description: ``,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/201911211909_OQAn_t.jpg',
      type: 'Macarrão',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Lasanha Bolonhesa',
      description: ``,
      subdescription: '',
      price: 16.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/202002061245_zpBB_.jpeg',
      type: 'Lasanha',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Lasanha Integral',
      description: ``,
      subdescription: '',
      price: 18.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/202008042153_UF29_.jpeg',
      type: 'Lasanha',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Lasanha Vegetariana',
      description: ``,
      subdescription: '',
      price: 18.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/202007092004_qY2s_.jpeg',
      type: 'Lasanha',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Cannelloni',
      description: ``,
      subdescription: '',
      price: 18.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/3d62c46f-d8af-4dc6-b0b5-e5d1ba81478c/202103121102_gY8Q_.jpeg',
      type: 'Cannelloni',
      storeId: 5,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Marmita (M)',
      description: ``,
      subdescription: '',
      price: 15.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/546a501d-7c0d-4d26-afe1-499dae730475/202111161134_QEI7_i.jpg',
      type: 'Marmitext',
      storeId: 6,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Marmita (P)',
      description: ``,
      subdescription: '',
      price: 12.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/546a501d-7c0d-4d26-afe1-499dae730475/202111161134_QEI7_i.jpg',
      type: 'Marmitext',
      storeId: 6,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Marmita (G)',
      description: `Marmitex grande vem com 2 carnes`,
      subdescription: '',
      price: 18.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/546a501d-7c0d-4d26-afe1-499dae730475/202111161134_QEI7_i.jpg',
      type: 'Marmitext',
      storeId: 6,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Barca de coxa + Guaraná Artemis 250 ml',
      description: `Frango + batata + 1 molho`,
      subdescription: 'Serve 1 pessoa',
      price: 30.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/d2885236-d608-4f25-96bd-8b8bd949a938/201903271109_lOlw_b.png',
      type: 'Destaques',
      storeId: 7,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Balde Médio + Guaraná 1,5 L Antártica',
      description: `Frango ( peito, coxa e tulipa) + batata + 2 molhos`,
      subdescription: 'Serve 3 pessoa',
      price: 79.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_low/pratos/d2885236-d608-4f25-96bd-8b8bd949a938/201903261733_DlE2_b.png',
      type: 'Destaques',
      storeId: 7,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Balde Grande',
      description: `44 pedaços de Frango + batata + 3 molhos`,
      subdescription: 'Serve 4 pessoa',
      price: 95.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/d2885236-d608-4f25-96bd-8b8bd949a938/201903261732_hWOi_b.png',
      type: 'Baldes',
      storeId: 7,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Balde Grande + Guaraná 2l Antártica',
      description: `Frango( peito, coxa e tulipa) + batata + 3 molhos`,
      subdescription: 'Serve 4 pessoa',
      price: 99.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/d2885236-d608-4f25-96bd-8b8bd949a938/201903261732_hWOi_b.png',
      type: 'Baldes',
      storeId: 7,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Talharim',
      description: `Felicidade é um prato de macarrão... Monte o seu macarrão escolhendo os ingredientes que você mais gosta.`,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/c5e5c20d-0038-476e-b134-eba25e8aeb10/202007042346_SOHa_d.jpg',
      type: 'Massas',
      storeId: 8,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Espaguete',
      description: `Felicidade é um prato de macarrão... Monte o seu macarrão escolhendo os ingredientes que você mais gosta.`,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/c5e5c20d-0038-476e-b134-eba25e8aeb10/202007042350_nCIf_e.jpg',
      type: 'Massas',
      storeId: 8,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Farfalle (Gravatinha)',
      description: `Felicidade é um prato de macarrão... Monte o seu macarrão escolhendo os ingredientes que você mais gosta.`,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/c5e5c20d-0038-476e-b134-eba25e8aeb10/202007042332_hSxn_g.jpg',
      type: 'Massas',
      storeId: 8,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Parafuso (Integral)',
      description: `Felicidade é um prato de macarrão... Monte o seu macarrão escolhendo os ingredientes que você mais gosta.`,
      subdescription: '',
      price: 14.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/c5e5c20d-0038-476e-b134-eba25e8aeb10/202110151711_E23A_i.jpg',
      type: 'Massas',
      storeId: 8,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Brownie Premium',
      description: `Contém 1 unidades de brownies, 1 coberturas e 1 confeitos.`,
      subdescription: 'Serve 1 pessoa',
      price: 9.85,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241009_oHc0_.jpeg',
      type: 'Brownies',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Brownie Supremo',
      description: `Contém 2 unidades de brownies, 2 coberturas e 2 confeitos.`,
      subdescription: 'Serve 2 pessoa',
      price: 18.85,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241005_SmXp_.jpeg',
      type: 'Brownies',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Brownie Unitário',
      description: ``,
      subdescription: 'Serve 1 pessoa',
      price: 3.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241002_64lj_.jpeg',
      type: 'Brownies',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Cookies',
      description: `Pacote com 5 unidades.`,
      subdescription: '',
      price: 3.85,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241011_lTP9_.jpeg',
      type: 'Cookies',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Donuts Grande',
      description: `Recheio: - Chantininho - Brigadeiro - Morango - Maracuja Cobertura: - Brigadeiro - Morango - Maracuja`,
      subdescription: 'Serve 1 pessoa',
      price: 4.35,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241118_v952_.jpeg',
      type: 'Donuts',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Donuts Pequeno',
      description: `Cobertura: - Morango - Maracujá - Brigadeiro`,
      subdescription: 'Serve 1 pessoa',
      price: 2.65,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/40fde309-b4b5-41cb-98b3-cb93084e6f90/202011241122_SCgr_.jpeg',
      type: 'Donuts',
      storeId: 9,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: '2 Shakes',
      description: ``,
      subdescription: 'Serve 2 pessoa',
      price: 14.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/096b21e9-d4f2-4c93-beb9-865e34ec4359/202109241701_QLU1_i.jpg',
      type: 'Destaques',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: '2 sanduíches Rodeio Duplo + 2 sanduíches Chicken Duplo + 2 Bebidas',
      description: `2 sanduíches Rodeio Duplo + 2 sanduíches Chicken Duplo + 2 Bebidas`,
      subdescription: 'Serve 2 pessoas',
      price: 58.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/096b21e9-d4f2-4c93-beb9-865e34ec4359/202109241707_1C2N_i.jpg',
      type: 'Destaques',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Combo Cheddar Dp',
      description: `Duas carnes bovinas grelhadas de 60g, pão preto com gergelim, cheddar cremoso, e cebolas caramelizadas ao molho shoyu. Acompanha batata média e bebida.`,
      subdescription: 'Serve 1 pessoa',
      price: 26.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/096b21e9-d4f2-4c93-beb9-865e34ec4359/202109241658_32TJ_i.jpg',
      type: 'Destaques',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Bk Cheddar',
      description: `Um hambúrguer com uma carne bovina grelhada de 48g, pão preto com gergelim, cheddar cremoso, e cebolas caramelizadas ao molho shoyu.`,
      subdescription: 'Serve 1 pessoa',
      price: 12.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202110271740_3342_i.jpg',
      type: 'Black November!',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Cheeseburger',
      description: `Pão com gergelim, um saboroso hambúrguer de pura carne bovina, uma fatia de queijo derretido, duas fatias de picles, ketchup e mostarda.`,
      subdescription: 'Serve 1 pessoa',
      price: 12.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/6e73dce2-a17f-4aef-9035-1409cea198fe/202110271740_3342_i.jpg',
      type: 'Black November!',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: '2 Sandubinha + Batata + Bebida',
      description: ``,
      subdescription: 'Serve 1 pessoa',
      price: 26.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/096b21e9-d4f2-4c93-beb9-865e34ec4359/202109241659_W368_i.jpg',
      type: 'Almoço no precinho!',
      storeId: 10,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Strogonoff de frango para 2 pessoas',
      description: `Delicioso strogonoff de frango, flambado com conhaque, com opções de conservas, vem com arroz branco e batata palha, podendo trocar por fritas.`,
      subdescription: 'Serve 2 pessoas',
      price: 44.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a2cd0b42-da4b-4f6d-9a45-483ed91f8c68/202003241009_xK5M_s.jpg',
      type: 'Destaques',
      storeId: 11,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Strogonoff de carne bovina 2 pessoas',
      description: `Delicioso strogonoff de carne bovina, flambado com conhaque, com opções de conservas. Acompanhado de arroz branco e batata palha, podendo trocar por fritas.`,
      subdescription: 'Serve 2 pessoas',
      price: 54.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a2cd0b42-da4b-4f6d-9a45-483ed91f8c68/201903142324_strog.jpg',
      type: 'Destaques',
      storeId: 11,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a2cd0b42-da4b-4f6d-9a45-483ed91f8c68/202104282037_375W_.jpeg',
      description: `Arroz branco, feijão de caldo com alho granulado desidratado, batata frita, bife a escolher, farofa da casa e ovo frito. Acompanha salada de alface, tomate e cebolinha .Os valores alteram de acordo com os produtos anexados.`,
      subdescription: '',
      price: 20.90,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a2cd0b42-da4b-4f6d-9a45-483ed91f8c68/202104282037_375W_.jpeg',
      type: 'Almoço executivo / jantinha executiva',
      storeId: 11,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }, {
      name: 'Combo executivo simples (2 marmitex)',
      description: `Arroz branco, feijão de caldo com granulado de alho desidratado, batata e bife acebolado à sua escolha. Acompanha salada de alface, tomate e cebolinha. Os valores alteram de acordo com os produtos anexados.
      Prato ilustrado com bife suíno e batata frita. (padrão do prato é purê de batata)`,
      subdescription: 'Serve 2 pessoas',
      price: 35.00,
      image_url: 'https://static-images.ifood.com.br/image/upload/t_medium/pratos/a2cd0b42-da4b-4f6d-9a45-483ed91f8c68/202106171220_MKL0_i.jpg',
      type: 'Almoço executivo / jantinha executiva',
      storeId: 11,
      createdAt: date.formatter(),
      updatedAt: date.formatter()
    }]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('items', null, {});
  }
};
